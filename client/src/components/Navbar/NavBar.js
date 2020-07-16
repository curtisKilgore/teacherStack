import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <nav className='navbar text-light' expand='lg'>
      <Navbar.Brand href='/'>
        <h1>Teacher Stack</h1>
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href='/'>
            <h3>Home</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/students'>
            <h3>Students</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/profile'>
            <h3>Profile</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/posts'>
            <h3>Forum</h3>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}

export default NavBar;
