import React, { useEffect, useState } from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';

const Student = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  console.log(profile);

  const [student, setStudent] = useState({
    name: 'Bobby Sims III',
    grade: 10,
    guardianname: 'Bobby Sims II',
    guardianphone: '951-555-5555',
    englishlearner: false,
    resourcestudent: false,
    medical: 'Asthma',
    teachingstrategies: `When working alone Bobby feels like he needs his headphones to conecntrate. I've made a deal with Bobby that if he works 15 minutes without headphones he can use them.`,
    interests: `Bobby and I have made connections when talking about the Lakers, specifically how much better they've been this season than last season.`,
    athlete: false,
    extracurricular: `Bobby is involved in BSU and our school's ASN program.`,
    goals: `Bobby wants to go to college, but doesn't know what kind of career he would like to pursue.`
  });
  const [visible, setVisible] = useState(false);

  const {
    name,
    grade,
    guardianname,
    guardianphone,
    englishlearner,
    resourcestudent,
    medical,
    teachingstrategies,
    interests,
    athlete,
    extracurricular,
    goals
  } = student;

  function handleClick() {
    openModal();
  }

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <tbody>
      <tr>
        <td className='chart'>{name}</td>
        <td className='chart'>{grade}</td>
        <td className='chart'>
          {athlete === false ? (
            <i
              className='fas fa-basketball-ball'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i
              className='fas fa-basketball-ball'
              style={{ color: '#FA8D62' }}
            ></i>
          )}
        </td>
        <td className='chart'>
          {englishlearner === false ? (
            <i className='fas fa-book' style={{ color: 'lightgrey' }}></i>
          ) : (
            <i className='fas fa-book' style={{ color: '#FA8D62' }}></i>
          )}
        </td>
        <td className='chart'>
          {resourcestudent === false ? (
            <i
              className='fas fa-pencil-ruler'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i className='fas fa-pencil-ruler' style={{ color: '#FA8D62' }}></i>
          )}
        </td>
        <td className='chart'>
          {medical === null ? (
            <i
              className='fas fa-briefcase-medical'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i
              className='fas fa-briefcase-medical'
              style={{ color: '#FA8D62' }}
            ></i>
          )}
        </td>
        <td style={{ border: 'none' }}>
          <button
            className='btn btn-primary'
            style={{
              backgroundColor: '#2f496e',
              borderColor: '#2f496e'
            }}
            onClick={handleClick}
          >
            View Profile
          </button>
        </td>
      </tr>
      <Modal
        visible={visible}
        effect='fadeInUp'
        onClickAway={() => closeModal()}
      >
        <div className='card' style={{ width: '750px', height: '750px' }}>
          <div className='card-title text-center'>
            <img
              className='round-img'
              src='https://images-na.ssl-images-amazon.com/images/I/31TKAn1X4yL._SX466_.png'
              alt={name}
              style={{ width: '200px', height: '200px' }}
            />
            <h3 className='card-title text-center bg-sea'>{name}</h3>
          </div>

          <div className='card-body text-left'>
            <p className='card-text'>Guardian Name: {guardianname}</p>
            <p className='card-text'>Guardian Phone: {guardianphone}</p>
            <p className='card-text'>
              English Learner:{' '}
              {englishlearner === false ? (
                <i className='fas fa-book' style={{ color: 'lightgrey' }}></i>
              ) : (
                <i className='fas fa-book' style={{ color: 'blue' }}></i>
              )}
            </p>
            <p className='card-text'>
              Resource Student:{' '}
              {resourcestudent === false ? (
                <i
                  className='fas fa-pencil-ruler'
                  style={{ color: 'lightgrey' }}
                ></i>
              ) : (
                <i
                  className='fas fa-pencil-ruler'
                  style={{ color: 'purple' }}
                ></i>
              )}
            </p>
            <p className='card-text'>
              Medical: {name} suffers from {medical}.
            </p>
            <p className='card-text'>
              Teaching Strategies: {teachingstrategies}
            </p>
            <p className='card-text'>Interests: {interests}</p>
            <p className='card-text'>
              Athlete:{' '}
              {athlete === false ? (
                <i
                  className='fas fa-basketball-ball'
                  style={{ color: 'lightgrey' }}
                ></i>
              ) : (
                <i
                  className='fas fa-basketball-ball'
                  style={{ color: 'green' }}
                ></i>
              )}
            </p>
            <p className='card-text'>
              Extracurricular Activities: {extracurricular}
            </p>
            <p className='card-text'>Goals: {goals}</p>
          </div>
        </div>
      </Modal>
    </tbody>
  );
};

Student.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Student);
