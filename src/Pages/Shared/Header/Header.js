import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='py-3' collapseOnSelect expand="lg" bg="primary " variant="dark">
  <Container>
  <Navbar.Brand>ALEX - TRAVEL GUIDE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link as={Link} to='about'>About</Nav.Link>
      <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
      <Nav.Link as={Link} to='login'>Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header