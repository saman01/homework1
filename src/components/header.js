import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';

export const Navvy = () => (
    <>
  <Navbar variant="dark" className='navvy'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">about us</Nav.Link>
      <Nav.Link href="/contact">contact</Nav.Link>
    </Nav>
  </Navbar>
</>
)


