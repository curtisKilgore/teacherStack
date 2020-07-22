import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      {profile !== null ? (
        <div className='profile-grid my-1'>
          <ProfileTop profile={profile} user={user} />
          <div className='profile-about bg-white p-2'>
            <h2 className='text-primary'>Skills</h2>
            <hr />
            <div className='skills'>
              {profile.skills.map((skill, index) => (
                <div className='p-1' key={index}>
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
                  <li key={course._id}>
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
                  <tr key={todo._id}>
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
      ) : (
        <Fragment>
          <h3 className='lead'>
            <i className='fas fa-user'></i> Welcome {user && user.name}
          </h3>
          <p>
            You have not created a profile, please add some info about yourself.
          </p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
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
