import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    user: { name }
  }
}) => {
  return (
    <div className='profile-about bg-white p-2'>
      {bio && (
        <Fragment>
          <h2 className='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
          <hr />
          <p>{bio}</p>
          <div className='line'></div>
        </Fragment>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
