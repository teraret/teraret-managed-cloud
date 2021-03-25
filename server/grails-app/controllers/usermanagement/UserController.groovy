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
class UserController {

    UserService userService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        [userList:userService.list(params),
         userCount: userService.count().intValue(),
         max: params.max,
         offset: params.int("offset") ?: 0,
         sort: params.sort,
         order: params.order
        ]
    }

    def show(String id) {
        def user = userService.get(new ObjectId(id))
        def roleList = Role.list()
//        def userroleList = UserRole.findAllByUser(user).role
//        List<RoleStatus> roleStatusList = []
//
//        roleList.each { r ->
//            roleStatusList.add(new RoleStatus(id: r.id,authority: r.authority, checked: userroleList.contains(r)))
//        }

        [user:user]
    }

    @Transactional
    def save(User user) {
        if (user == null) {
            render status: NOT_FOUND
            return
        }
        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors
            return
        }

        try {
            userService.save(user)
        } catch (ValidationException e) {
            respond user.errors
            return
        }

        respond user, [status: CREATED, view:"show"]
    }

    @Transactional
    def update(User user) {
        if (user == null) {
            render status: NOT_FOUND
            return
        }
        if (user.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond user.errors
            return
        }

        try {
            userService.save(user)
        } catch (ValidationException e) {
            respond user.errors
            return
        }

        respond user, [status: OK, view:"show"]
    }

    @Transactional
    def delete(Long id) {
        if (id == null || userService.delete(id) == null) {
            render status: NOT_FOUND
            return
        }

        render status: NO_CONTENT
    }
}
