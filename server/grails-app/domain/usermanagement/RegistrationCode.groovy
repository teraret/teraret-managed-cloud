package usermanagement

import org.bson.types.ObjectId

class RegistrationCode {
    ObjectId id
    String username
    String token = UUID.randomUUID().toString().replaceAll('-', '')
    Date dateCreated

    static mapping = {
        version false
    }
}
