import React from "react";
import { Container, Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
// import '../../styles/_navbar.scss';
import logo from '../../assets/Saloon 82-01.png'; // Ensure correct path
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <BootstrapNavbar className="custom-navbar" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#/" className="d-flex align-items-center">
          <img src={logo} alt="Salon 82 Logo" className="navbar-logo" />
          <span className="ms-2 logo-text"></span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#footer" className="nav-link-custom">Salon near me</Nav.Link>
            <Nav.Link href="#/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#/gallery" className="nav-link-custom">Gallery</Nav.Link>
            {/* <Nav.Link as={NavLink} to="/gallery" className="nav-link-custom">Gallery</Nav.Link> */}
            <Nav.Link href="#/services" className="nav-link-custom">Services</Nav.Link>


            {/* Dropdown for Services */}
            {/* <NavDropdown title="Services" id="services-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#/services/hair">Hair</NavDropdown.Item>
              <NavDropdown.Item href="#/services/skin">Skin</NavDropdown.Item>
              <NavDropdown.Item href="#/services/coloring">Coloring</NavDropdown.Item>
              <NavDropdown.Item href="#/services">Services</NavDropdown.Item>
            </NavDropdown> */}

             {/* Contact Button */}
            <Nav.Link href="#/contact" className="nav-link-custom">Contact</Nav.Link>
          
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
