package company

import org.bson.types.ObjectId

class OfficeType {
    ObjectId id
    String name
    Date dateCreated
    Date lastUpdated

    static constraints = {
        name unique:true
    }
}
