package usermanagement

import grails.gorm.services.Service

@Service(Permission)
interface PermissionService {

    Permission get(Serializable id)

    List<Permission> list(Map args)

    Long count()

    Permission delete(Serializable id)

    Permission save(Permission permission)

}
