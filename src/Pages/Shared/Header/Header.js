import { signOut } from 'firebase/auth';
import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (
    <Navbar className='py-3 fw-bold shadow' sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as = {Link} to='/' className='text-primary'>ALEX - TRAVEL GUIDE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link className='active' as={Link}  to='/'>Home</Nav.Link>
      <Nav.Link className='active' as={Link} to='/about'>About</Nav.Link>
      <Nav.Link className='active' as={Link} to='/blogs'>Blogs</Nav.Link>
      {
        user?
        <Nav.Link className='btn btn-dark text-light px-4 rounded-pill' onClick={handleSignOut}>Logout</Nav.Link>
          : 
        <Nav.Link className='btn btn-dark text-light px-4 rounded-pill' as={Link} to='login'>Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header