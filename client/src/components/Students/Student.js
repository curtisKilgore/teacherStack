import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import './Modal.css';

function Student({ student }) {
  const [visible, setVisible] = useState(false);

  const {
    name,
    grade,
    avatar,
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
              src={avatar}
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
}

export default Student;
