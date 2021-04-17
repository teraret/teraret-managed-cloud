import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import Logo from './../../images/teraretwhite.svg';
export default function TopNav(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
    <Navbar className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"  color="dark" dark >
    <Container>
        <NavbarBrand href="/">
        <img src={Logo} width="100" alt="Teraret Managed Cloud Private Limited"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav ml-auto" navbar>
            <NavItem className="nav-item">
              <NavLink className="nav-link" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hosting">Hosting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hosting">Cloud Deployment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem className="cta">
              <NavLink href="/contact">Get started</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar> 
        </>
    )
}
