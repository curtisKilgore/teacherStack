import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Main({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }
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

Main.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapToStateProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapToStateProps)(Main);
