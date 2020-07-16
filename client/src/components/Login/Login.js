import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container'>
      <h1 className='large text-sea'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' action=''>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' />
        </div>
        <input type='submit' className='btn btn-coral' />
      </form>
      <p className='my-1'>
        Don't have an account?
        <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
}
export default Login;
