import React, { Fragment, useEffect } from 'react';
import Student from './Student';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

const StudentContainer = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <div className='large text-primary'></div>
      <table className='table'>
        <thead>
          <th>Student Name</th>
          <th>Student Grade</th>
          <th>Athlete</th>
          <th>EL Student</th>
          <th>Resource Student</th>
          <th>Medical</th>
        </thead>
        <Student />
      </table>
    </Fragment>
  );
};

StudentContainer.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(
  StudentContainer
);
