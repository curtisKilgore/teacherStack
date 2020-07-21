import React from 'react';

function Footer() {
  return (
    <foote
      variant='dark'
      className='footer justify-content-center'
      fixed='bottom'
    >
      <div className='navbar-brand' href='/'>
        <span className='text-center'>
          Copyright &copy;
          {new Date().getFullYear()} | | Made By Teacher Stack Inc. | |{' '}
          <i className='fas fa-apple-alt'></i>
        </span>
      </div>
    </foote>
  );
}

export default Footer;
