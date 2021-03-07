package teraret.managed.cloud
import crm.DealStatus

class BootStrap {

    def init = { servletContext ->

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

    }
    def destroy = {
    }
}
