import React, { useState } from 'react';
import './form.css';

function GenericForm() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });

  function change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // Clear Form
    this.setState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    });
  }

  return (
    <div className='container'>
      {' '}
      <div className='bg-sea p'>
        <h1>Register With Us</h1>
      </div>
      <div className='post-form'>
        <form className='form my-1'>
          <input
            name='firstName'
            placeholder='First Name'
            type='password'
            value={state.firstName}
            onChange={change}
          />
          <label htmlFor='last-name' className='label-name' />

          <input
            name='lastName'
            placeholder='Last Name'
            type='password'
            value={state.lastName}
            onChange={change}
          />
          <label htmlFor='last-name' className='label-name' />

          <input
            name='userName'
            placeholder='Username'
            type='password'
            value={state.userName}
            onChange={change}
          />
          <label htmlFor='last-name' className='label-name' />

          <input
            name='email'
            type='email'
            placeholder='Email'
            value={state.email}
            onChange={change}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={state.password}
            onChange={change}
          />

          <button className='btn btn-coral my-1' onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default GenericForm;
