package company

import org.bson.types.ObjectId
import usermanagement.UserRole

class Company {
    ObjectId id
    String avatar
    String name
    String description
    Date establishedDate
    String website
    String fax
    UserRole userRole
    static hasMany = [address: Address]
    static embedded = ['address']
    Date dateCreated
    Date lastUpdated

    static constraints = {

        avatar nullable:true, blank:true
        name unique:true
        description nullable: true, blank: true
        establishedDate nullable: true, blank: true
        fax nullable: true, blank: true
        website unique:true,nullable: true, blank: true

    }
}
