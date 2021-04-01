import React from 'react'

export default function DomainSearch() {
    return (<section className="ftco-domain">
  <div className="container">
    <div className="row d-flex align-items-center justify-content-center">
      <div className="col-lg-10 p-5 ftco-wrap ftco-animate">
        <form action="#" className="domain-form d-flex mb-3">
          <div className="form-group domain-name">
            <input type="text" className="form-control name px-4" placeholder="Enter your domain name..." />
          </div>
          <div className="form-group domain-select d-flex">
            <div className="select-wrap">
              <div className="icon"><span className="ion-ios-arrow-down" /></div>
              <select name id className="form-control">
                <option value>.com</option>
                <option value>.net</option>
                <option value>.biz</option>
                <option value>.co</option>
                <option value>.me</option>
              </select>
            </div>
            <input type="submit" className="search-domain btn btn-primary text-center" defaultValue="Search" />
          </div>
        </form>
        <p className="domain-price mt-2 text-center">
          <span><small>.com</small> $9.75</span> 
          <span><small>.net</small> $9.50</span> 
          <span><small>.biz</small> $8.95</span> 
          <span><small>.co</small> $7.80</span>
          <span><small>.me</small> $7.95</span>
        </p>
      </div>
    </div>
  </div>
</section>)
}
