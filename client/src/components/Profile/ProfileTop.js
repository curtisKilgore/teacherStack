import React from 'react';

function ProfileTop({ profile, user }) {
  console.log(profile, 'this is profile');
  console.log(user, 'this is user');
  const { name, email } = user;
  const { role, subject } = profile;

  return (
    <div className='profile-top bg-sea p-2'>
      <img
        src={
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        alt=''
        className='round-img my-1'
      />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        Teacher Stack High School, {role},{subject}
      </p>
      <p className='lead'>{email}</p>
    </div>
  );
}

export default ProfileTop;
