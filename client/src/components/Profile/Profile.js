import React, { useState, Fragment, useEffect } from 'react';
import ProfileTop from './ProfileTop';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='profile-grid my-1'>
        <ProfileTop profile={profile} user={user} />
        <div className='profile-about bg-white p-2'>
          <h2 className='text-primary'>Skills</h2>
          <hr />
          <div className='skills'>
            {profile.skills.map(skill => (
              <div className='p-1'>
                <i className='fas fa-check'></i> {skill}
              </div>
            ))}
          </div>
        </div>

        <div className='profile-schedule bg-white p-2'>
          <h2 className='text-primary'>Class Schedule</h2>
          <hr />
          <ul>
            {profile.classes.map(course => {
              return (
                <li>
                  {course.period}. {course.name}{' '}
                  <button className='btn-coral'>View Class</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='profile-todo bg-white p-2'>
          <h2 className='text-primary'>To Do List</h2>
          <hr />
          <table>
            <thead>
              <th>Task</th>
              <th>Deadline</th>
              <th>Completed</th>
            </thead>

            {profile.todos.map(todo => {
              return (
                <tr>
                  <td>{todo.task}</td>
                  <td>
                    <Moment format='MM/DD/YYYY'>{todo.deadline}</Moment>
                  </td>
                  <td>{todo.completed}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
