package usermanagement

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NOT_FOUND
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY

import grails.gorm.transactions.ReadOnly
import grails.gorm.transactions.Transactional

@ReadOnly
class RolePermissionController {

    RolePermissionService rolePermissionService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond rolePermissionService.list(params), model:[rolePermissionCount: rolePermissionService.count()]
    }

    def show(Long id) {
        respond rolePermissionService.get(id)
    }

    @Transactional
    def save(RolePermission rolePermission) {
        if (rolePermission == null) {
            render status: NOT_FOUND
            return
        }
        if (rolePermission.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond rolePermission.errors
            return
        }

        try {
            rolePermissionService.save(rolePermission)
        } catch (ValidationException e) {
            respond rolePermission.errors
            return
        }

        respond rolePermission, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(RolePermission rolePermission) {
        if (rolePermission == null) {
            render status: NOT_FOUND
            return
        }
        if (rolePermission.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond rolePermission.errors
            return
        }

        try {
            rolePermissionService.save(rolePermission)
        } catch (ValidationException e) {
            respond rolePermission.errors
            return
        }

        respond rolePermission, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || rolePermissionService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
