package crm


import grails.rest.*
import grails.converters.*

class DealStatusController extends RestfulController {
    static responseFormats = ['json', 'xml']
    DealStatusController() {
        super(DealStatus)
    }
}
