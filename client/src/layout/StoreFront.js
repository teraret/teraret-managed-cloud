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
       
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-4">
                  <h2 className="ftco-heading-2">Teraret</h2>
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
                  <h2 className="ftco-heading-2">Registered Office</h2>
                  <div className="block-23 mb-3">
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | <a href="https://teraret.com">TERARET MANAGED CLOUD PRIVATE LIMITED </a> 
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
      </>
      
    )
}
