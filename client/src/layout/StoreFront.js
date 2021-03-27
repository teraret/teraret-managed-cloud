import React from 'react'
// import './../css/open-iconic-bootstrap.min.css';
import './../css/animate.css';
// import './../css/owl.carousel.min.css';
 import './../css/owl.theme.default.min.css';
 import './../css/magnific-popup.css';
 import './../css/aos.css';
// import './../css/ionicons.min.css';
 import './../css/bootstrap-datepicker.css';
 import './../css/jquery.timepicker.css';
// import './../css/css/flaticon.css';
// import './../css/icomoon.css';
import './../css/style.css';
export default function StoreFront() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Ignite</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                <li className="nav-item"><a href="domain.html" className="nav-link">Domain</a></li>
                <li className="nav-item"><a className="nav-link" href="hosting.html">Hosting</a></li>
                <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item cta"><a href="contact.html" className="nav-link"><span>Get started</span></a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <div className="hero-wrap js-fullheight img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
          <div className="overlay" />
          <div className="container-fluid px-0">
            <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-center">
              <div className="col-md-8 text-center d-flex align-items-center ftco-animate js-fullheight">
                <div className="text mt-5">
                  <span className="subheading">Web Hosting</span>
                  <h1 className="mb-3">Best Web Hosting For Your Website</h1>
                  <p>Get best speed for your website. Don't lose more clients</p>
                  <p><a href="#" className="btn btn-secondary px-4 py-3">Get Started Now</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-domain">
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
        </section>
        <section className="ftco-section ftco-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm ftco-animate">
                <a href="#" className="partner"><img src="images/partner-1.png" className="img-fluid" alt="Colorlib Template" /></a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner"><img src="images/partner-2.png" className="img-fluid" alt="Colorlib Template" /></a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner"><img src="images/partner-3.png" className="img-fluid" alt="Colorlib Template" /></a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner"><img src="images/partner-4.png" className="img-fluid" alt="Colorlib Template" /></a>
              </div>
              <div className="col-sm ftco-animate">
                <a href="#" className="partner"><img src="images/partner-5.png" className="img-fluid" alt="Colorlib Template" /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section services-section bg-light ftco-no-pb">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h2 className="mb-4">Why You Should Choose Us</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-cloud" />
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Super Fast Server</h3>
                    <p className="mb-0">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </div>
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-server" />
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Daily Backups</h3>
                    <p className="mb-0">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>    
              </div>
              <div className="col-lg-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services d-flex align-items-start">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-customer-service" />
                  </div>
                  <div className="media-body pl-4">
                    <h3 className="heading">Technical Services</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>      
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-counter bg-light img" id="section-counter">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 text-center heading-section ftco-animate">
                <h2 className="mb-4">More than 12,000 websites trusted hosted</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={12000}>0</strong>
                    <span>CMS Installation</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={100}>0</strong>
                    <span>Awards Won</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={10000}>0</strong>
                    <span>Registered Domains</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 text-center">
                  <div className="text">
                    <strong className="number" data-number={9000}>0</strong>
                    <span>Satisfied Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6 order-lg-last d-flex">
                <div className="bg-primary py-md-5 d-flex align-self-stretch">
                  <div className="main">
                    <img src="images/undraw_data_report_bi6l.svg" className="img-fluid svg" alt />
                    <div className="heading-section heading-section-white ftco-animate mt-5 px-3 px-md-5">
                      <h2 className="mb-4">Our Main Services</h2>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 py-5">
                <div className="row pt-md-5">
                  <div className="col-md-6 ftco-animate">
                    <div className="media block-6 services text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-cloud-computing" />
                      </div>
                      <div className="mt-3 media-body media-body-2">
                        <h3 className="heading">Cloud VPS</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="media block-6 services text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-cloud" />
                      </div>
                      <div className="mt-3 media-body media-body-2">
                        <h3 className="heading">Share</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="media block-6 services text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-server" />
                      </div>
                      <div className="mt-3 media-body media-body-2">
                        <h3 className="heading">VPS</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ftco-animate">
                    <div className="media block-6 services text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-database" />
                      </div>
                      <div className="mt-3 media-body media-body-2">
                        <h3 className="heading">Dedicated</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-primary">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                <h2 className="mb-4">Our Best Pricing</h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
            <div className="row no-gutters d-flex">
              <div className="col-lg-3 col-md-6 ftco-animate d-flex">
                <div className="block-7 bg-light d-flex align-self-stretch">
                  <div className="text-center">
                    <h2 className="heading">Free</h2>
                    <span className="price"><sup>$</sup> <span className="number">0<small className="per">/mo</small></span>
                      <span className="excerpt d-block">100% free. Forever</span>
                      <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
                      <ul className="pricing-text mb-4">
                        <li><strong>150 GB</strong> Bandwidth</li>
                        <li><strong>100 GB</strong> Storage</li>
                        <li><strong>$1.00 / GB</strong> Overages</li>
                        <li>All features</li>
                      </ul>
                      <a href="#" className="btn btn-secondary d-block px-3 py-3 mb-4">Choose Plan</a>
                    </span></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ftco-animate d-flex">
                <div className="block-7 d-flex align-self-stretch">
                  <div className="text-center">
                    <h2 className="heading">Startup</h2>
                    <span className="price"><sup>$</sup> <span className="number">19<small className="per">/mo</small></span></span>
                    <span className="excerpt d-block">All features are included</span>
                    <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
                    <ul className="pricing-text mb-4">
                      <li><strong>450 GB</strong> Bandwidth</li>
                      <li><strong>400 GB</strong> Storage</li>
                      <li><strong>$2.00 / GB</strong> Overages</li>
                      <li>All features</li>
                    </ul>
                    <a href="#" className="btn btn-secondary d-block px-3 py-3 mb-4">Choose Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ftco-animate d-flex">
                <div className="block-7 active d-flex align-self-stretch">
                  <div className="text-center">
                    <h2 className="heading">Premium</h2>
                    <span className="price"><sup>$</sup> <span className="number">49<small className="per">/mo</small></span></span>
                    <span className="excerpt d-block">All features are included</span>
                    <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
                    <ul className="pricing-text mb-4">
                      <li><strong>250 GB</strong> Bandwidth</li>
                      <li><strong>200 GB</strong> Storage</li>
                      <li><strong>$5.00 / GB</strong> Overages</li>
                      <li>All features</li>
                    </ul>
                    <a href="#" className="btn btn-primary d-block px-3 py-3 mb-4">Choose Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 ftco-animate d-flex">
                <div className="block-7 d-flex align-self-stretch">
                  <div className="text-center">
                    <h2 className="heading">Pro</h2>
                    <span className="price"><sup>$</sup> <span className="number">99<small className="per">/mo</small></span></span>
                    <span className="excerpt d-block">All features are included</span>
                    <h3 className="heading-2 mb-3">Enjoy All The Features</h3>
                    <ul className="pricing-text mb-4">
                      <li><strong>450 GB</strong> Bandwidth</li>
                      <li><strong>400 GB</strong> Storage</li>
                      <li><strong>$20.00 / GB</strong> Overages</li>
                      <li>All features</li>
                    </ul>
                    <a href="#" className="btn btn-secondary d-block px-3 py-3 mb-4">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h2 className="mb-4">Our satisfied customer says</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
            </div>
            <div className="row ftco-animate">
              <div className="col-md-12">
                <div className="carousel-testimony owl-carousel ftco-owl">
                  <div className="item">
                    <div className="testimony-wrap p-4 text-center">
                      <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Web</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 text-center">
                      <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_2.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Web</p>
                        <span className="position">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 text-center">
                      <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Web</p>
                        <span className="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 text-center">
                      <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Web</p>
                        <span className="position">Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimony-wrap p-4 text-center">
                      <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left" />
                        </span>
                      </div>
                      <div className="text">
                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <p className="name">Mark Web</p>
                        <span className="position">System Analyst</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h2>Recent Blog</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                  </a>
                  <div className="text text-center py-3">
                    <div className="meta mb-2">
                      <div><a href="#">Aug 5, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <div className="desc">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry" data-aos-delay={100}>
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                  </a>
                  <div className="text text-center py-3">
                    <div className="meta mb-2">
                      <div><a href="#">Aug 5, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <div className="desc">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ftco-animate">
                <div className="blog-entry" data-aos-delay={200}>
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                  </a>
                  <div className="text text-center py-3">
                    <div className="meta mb-2">
                      <div><a href="#">Aug 5, 2019</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                    <div className="desc">
                      <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Ignite</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <ul className="ftco-footer-social list-unstyled mb-0">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4 ml-md-5">
                  <h2 className="ftco-heading-2">Unseful Links</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">Servers</a></li>
                    <li><a href="#" className="py-2 d-block">Windos Hosting</a></li>
                    <li><a href="#" className="py-2 d-block">Cloud Hosting</a></li>
                    <li><a href="#" className="py-2 d-block">OS Servers</a></li>
                    <li><a href="#" className="py-2 d-block">Linux Servers</a></li>
                    <li><a href="#" className="py-2 d-block">Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Navigational</h2>
                  <ul className="list-unstyled">
                    <li><a href="#" className="py-2 d-block">Home</a></li>
                    <li><a href="#" className="py-2 d-block">Domain</a></li>
                    <li><a href="#" className="py-2 d-block">Hosting</a></li>
                    <li><a href="#" className="py-2 d-block">About</a></li>
                    <li><a href="#" className="py-2 d-block">Blog</a></li>
                    <li><a href="#" className="py-2 d-block">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Office</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
      </>
      
    )
}
