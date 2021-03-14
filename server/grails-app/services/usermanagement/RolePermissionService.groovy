package usermanagement

import grails.gorm.services.Service

@Service(RolePermission)
interface RolePermissionService {

    RolePermission get(Serializable id)

    List<RolePermission> list(Map args)

    Long count()

    RolePermission delete(Serializable id)

    RolePermission save(RolePermission rolePermission)

}
