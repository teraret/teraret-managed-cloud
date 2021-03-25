package usermanagement

import grails.rest.Resource
import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic
import org.bson.types.ObjectId


@GrailsCompileStatic
@Resource(uri='/api/user')
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

    private static final long serialVersionUID = 1

    ObjectId id

    String mobile
    String email
    String username
    String password

    boolean enabled = true
    boolean mobileVerified
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    Set<Role> authorities
    static embedded = ['authorities']



//    Set<Role> getAuthorities() {
//        (UserRole.findAllByUser(this) as List<UserRole>)*.role as Set<Role>
//    }

    static constraints = {
        mobile nullable: false, blank: false, unique: true
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true,email:true
    }

    static mapping = {
	    password column: '`password`'
    }
}
