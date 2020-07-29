import React from 'react';
import { ProfileActions } from './ProfileActions';

function ProfileTop({
  profile: {
    role,
    subject,
    social,
    user: { name, email, avatar }
  }
}) {
  return (
    <div className='profile-top bg-sea p-2'>
      <ProfileActions />
      <img src={avatar} alt='' className='round-img my-1 py-2' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        Teacher Stack High School, {role}, {subject}
      </p>
      <p className='lead'>{email}</p>
      <div className='icons my-1'>
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileTop;
