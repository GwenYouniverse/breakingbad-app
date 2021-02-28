import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import logo from '../../img/logo.png'
import brbasound from '../../sound/brbasound.mp3'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Player from './Player'

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
            <Nav className="mr-auto" >
              <LinkContainer to='/'>
                <Nav.Link className="nav-tekst hvr-grow">HOME </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/characters'>
                <Nav.Link className="nav-tekst hvr-grow">CHARACTERS </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/episodes'>
                <Nav.Link className="nav-tekst hvr-grow">EPISODES </Nav.Link>
              </LinkContainer>
            </Nav>

            <Navbar.Text style={{ color: 'rgba(0, 230, 64, 1)' }}>
              PLAY ME
            </Navbar.Text>

            <ArrowForwardIosIcon color="secondary" fontSize="large" >PLAY ME</ArrowForwardIosIcon>
            <Player url={brbasound} />


          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div >
  )
}

export default Header
