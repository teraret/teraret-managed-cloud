package usermanagement

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic
import org.bson.types.ObjectId

@GrailsCompileStatic
@EqualsAndHashCode(includes='entry')
@ToString(includes='entry', includeNames=true, includePackage=false)
class RoleHierarchyEntry implements Serializable {

	private static final long serialVersionUID = 1
	ObjectId id

	String entry

	static constraints = {
		entry nullable: false, blank: false, unique: true
	}

	static mapping = {
		cache true
	}
}
