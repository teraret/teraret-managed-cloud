package crm

import org.bson.types.ObjectId

class DealStatus {
    ObjectId id
    String name

    static constraints = {
        name unique:true
    }
}
