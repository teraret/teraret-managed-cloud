package usermanagement

class Permission {

    User user
    String permission

    static constraints = {
        permission unique: 'user'
    }
}
