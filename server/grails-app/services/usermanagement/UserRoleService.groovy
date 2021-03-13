package usermanagement

import grails.gorm.services.Service

@Service(UserRole)
interface UserRoleService {

    UserRole save(UserRole userRole)

}
