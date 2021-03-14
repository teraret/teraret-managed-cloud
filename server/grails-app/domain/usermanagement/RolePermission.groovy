package usermanagement

class RolePermission {
    Role role
    String permission

    RolePermission(Role role, String permission) {
        this.role = role
        this.permission = permission
    }

    static constraints = {
        permission unique: 'role'
    }
}
