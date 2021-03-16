package company

import org.bson.types.ObjectId

class Address {
    ObjectId id
    String addresslineone
    String addresslinetwo
    String country
    String state
    String zip
    Date dateCreated
    Date lastUpdated

    static constraints = {
        addresslinetwo nullable: true, blank: true
    }
}
