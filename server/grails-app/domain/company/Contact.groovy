package company

import org.bson.types.ObjectId

class Contact {
    ObjectId id
    String avatar
    Company company
    String firstName
    String lastName
    Date dob
    Position position
    String note
    String mobile
    String email
    static hasMany = [address: Address]
    static embedded = ['address']
    Date dateCreated
    Date lastUpdated

    static constraints = {
        avatar nullable:true, blank:true
        firstName matches: "[a-zA-Z ]+"
        lastName matches: "[a-zA-Z ]+"
        note nullable:true,blank:true
        email unique:true,email: true
    }

}
