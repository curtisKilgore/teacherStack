import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='container'>
      <h1 className='large text-sea'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form action='' className='form'>
        <div className='form-group'>
          <input type='text' placeholder='Name' name='name' />
        </div>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' name='email' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' name='password2' />
        </div>
        <input type='submit' className='btn btn-coral' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  );
}

export default SignUp;
