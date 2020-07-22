import React from 'react';
import { Link } from 'react-router-dom';

export const ProfileActions = () => {
  return (
    <div className='dash-buttons py-2'>
      <Link to='/edit-profile' className='btn btn-coral'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-coral'>
        <i className='fas fa-check text-primary'></i> Add ToDo
      </Link>
      <Link to='/add-class' className='btn btn-coral'>
        <i className='fas fa-chalkboard-teacher text-primary'></i> Add Class
      </Link>
    </div>
  );
};
