import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg" variant="dark" className="navigacija">
        <Container>
        <Navbar.Brand href="#home"><img
          width="80"
          height="50"
          src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto">
            <Nav.Link href="/home" className="nav-tekst">Home</Nav.Link>
            <Nav.Link href="/characters" className="nav-tekst">Characters</Nav.Link>
            <Nav.Link href="/episodes" className="nav-tekst">Episodes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
          </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>

    </div >
  )
}

export default Header
