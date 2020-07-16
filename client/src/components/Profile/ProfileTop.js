import React from 'react';

function ProfileTop({ teacher }) {
  const { name, email, school, team, avatar, classSchedule } = teacher;
  return (
    <div className='profile-top bg-sea p-2'>
      <img src={avatar} alt='' className='round-img my-1' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {school}, {team}
      </p>
      <p className='lead'>{email}</p>
    </div>
  );
}

export default ProfileTop;
