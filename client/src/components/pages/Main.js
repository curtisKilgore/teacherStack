import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Teacher Stack</h1>
          <p className='lead'>
            Create a teacher profile, take notes on your students, and get help
            from other teachers
          </p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-sea'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-coral'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
