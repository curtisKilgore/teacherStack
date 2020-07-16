import React from 'react';
import { Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar
      variant='dark'
      className='footer justify-content-center'
      fixed='bottom'
    >
      <Navbar.Brand href='/'>
        <span className='text-center'>
          Copyright &copy;
          {new Date().getFullYear()} | | Made By Teacher Stack Inc. | |{' '}
          <i className='fas fa-apple-alt'></i>
        </span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
