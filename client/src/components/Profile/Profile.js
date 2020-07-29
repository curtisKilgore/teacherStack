import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteTodo } from '../../actions/profile';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import ProfileAbout from './ProfileAbout';

const Profile = ({
  getCurrentProfile,
  deleteTodo,
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
          <ProfileAbout profile={profile} user={user} />
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
            <table className='table'>
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Subject</th>
                  <th>Description</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {profile.classes.map(course => {
                  return (
                    <tr key={course._id}>
                      <td>{course.period}</td>
                      <td>{course.name}</td>
                      <td>{course.description}</td>
                      <td>
                        <Link to={`/roster`} className='btn-coral'>
                          View Class
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className='profile-todo bg-white p-2'>
            <h2 className='text-primary'>ToDo List</h2>
            <hr />
            <thead>
              <tr>
                <th>Task</th>
                <th>Deadline</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {profile.todos.map(todo => {
                return (
                  <tr key={todo._id}>
                    <td className='periodNum'>{todo.task}</td>
                    <td>
                      <Moment format='MM/DD/YYYY'>{todo.deadline}</Moment>
                    </td>
                    <td>
                      <button
                        className='btn btn-sea'
                        onClick={() => deleteTodo(todo._id)}
                      >
                        Mark as Completed
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </div>
          <br />
          <br />
          <br />
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
  deleteTodo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteTodo })(
  Profile
);
