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
class PermissionController {

    PermissionService permissionService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond permissionService.list(params), model:[permissionCount: permissionService.count()]
    }

    def show(Long id) {
        respond permissionService.get(id)
    }

    @Transactional
    def save(Permission permission) {
        if (permission == null) {
            render status: NOT_FOUND
            return
        }
        if (permission.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond permission.errors
            return
        }

        try {
            permissionService.save(permission)
        } catch (ValidationException e) {
            respond permission.errors
            return
        }

        respond permission, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(Permission permission) {
        if (permission == null) {
            render status: NOT_FOUND
            return
        }
        if (permission.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond permission.errors
            return
        }

        try {
            permissionService.save(permission)
        } catch (ValidationException e) {
            respond permission.errors
            return
        }

        respond permission, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || permissionService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
