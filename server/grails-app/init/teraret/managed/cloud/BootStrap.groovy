package teraret.managed.cloud
import crm.DealStatus
import usermanagement.Role

class BootStrap {

    def init = { servletContext ->

        new Role(authority: "ROLE_ADMIN").save()
        new Role(authority: "ROLE_CRM_LEAD").save()
        new Role(authority: "ROLE_CRM").save()
        new Role(authority: "ROLE_CLIENT").save()

        new DealStatus(name:'Prospect').save
        new DealStatus(name:'Leads').save()
        new DealStatus(name:'Pitched').save()
        new DealStatus(name:'Qualified').save()
        new DealStatus(name:'Proposal Sent').save()
        new DealStatus(name:'Negotiation').save()
        new DealStatus(name:'Partial payment done').save()
        new DealStatus(name:'Deal Won').save()
        new DealStatus(name:'Deal Lost').save()
        new DealStatus(name:'Partial payment done').save()
        new DealStatus(name:'Complete Done').save()
        new DealStatus(name:'Refund Completely').save()
        new DealStatus(name:'Refund Partially').save()

    }
    def destroy = {
    }
}
