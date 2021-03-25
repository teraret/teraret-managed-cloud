package usermanagement

import grails.validation.ValidationException
import org.bson.types.ObjectId

import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class RoleController {

    RoleService roleService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond roleService.list(params),



                [roleList:roleService.list(params),
                 roleCount: roleService.count().intValue(),
                 max: params.max,
                 offset: params.int("offset") ?: 0,
                 sort: params.sort,
                 order: params.order]
    }

    def show(String id) {
        def role =roleService.get(new ObjectId(id))
        [role:role]
    }

    @Transactional
    def save(Role role) {
        if (role == null) {
            render status: NOT_FOUND
            return
        }
        if (role.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond role.errors
            return
        }

        try {
            roleService.save(role)
        } catch (ValidationException e) {
            respond role.errors
            return
        }

        respond role, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Role role) {
        if (role == null) {
            render status: NOT_FOUND
            return
        }
        if (role.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond role.errors
            return
        }

        try {
            roleService.save(role)
        } catch (ValidationException e) {
            respond role.errors
            return
        }

        respond role, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || roleService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
