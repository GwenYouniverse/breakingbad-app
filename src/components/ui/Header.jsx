import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <div>

      <Navbar collapseOnSelect expand="lg" variant="dark" className="navigacija">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand><img
              width="80"
              height="50"
              src={logo} alt="" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Nav.Link className="nav-tekst">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/characters'>
                <Nav.Link className="nav-tekst">Characters</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/episodes'>
                <Nav.Link className="nav-tekst">Episodes</Nav.Link>
              </LinkContainer>
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
