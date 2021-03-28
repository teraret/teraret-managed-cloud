import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import homebackground from './../../images/server-background.jpg'

export default function Home() {
    return (
        <div className="hero-wrap js-fullheight img" style={{backgroundImage: 'url('+homebackground+')'}}>
        <div className="overlay" />
        <Container className="container-fluid px-0">
         <Row className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-center">
          <Col className="col-md-8 text-center d-flex align-items-center ftco-animate js-fullheight">
          <span className="subheading">Web Hosting</span>
                <h1 className="mb-3">Best Web Hosting For Your Website</h1>
                <p>Get best speed for your website. Don't lose more clients</p>
                <p><a href="#" className="btn btn-secondary px-4 py-3">Get Started Now</a></p>
          </Col>
         </Row>
        </Container>
        {/* <div className="container-fluid px-0">
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
        </div> */}
      </div>
    )
}
