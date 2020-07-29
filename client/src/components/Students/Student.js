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
              className='fas fa-basketball-ball fa-2x'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i
              className='fas fa-basketball-ball fa-2x'
              style={{ color: '#FA8D62' }}
            ></i>
          )}
        </td>
        <td className='chart'>
          {englishlearner === false ? (
            <i className='fas fa-book fa-2x' style={{ color: 'lightgrey' }}></i>
          ) : (
            <i className='fas fa-book fa-2x' style={{ color: '#FA8D62' }}></i>
          )}
        </td>
        <td className='chart'>
          {resourcestudent === false ? (
            <i
              className='fas fa-pencil-ruler fa-2x'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i
              className='fas fa-pencil-ruler fa-2x'
              style={{ color: '#FA8D62' }}
            ></i>
          )}
        </td>
        <td className='chart'>
          {medical === null ? (
            <i
              className='fas fa-briefcase-medical fa-2x'
              style={{ color: 'lightgrey' }}
            ></i>
          ) : (
            <i
              className='fas fa-briefcase-medical fa-2x'
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
        <div className='card' style={{ width: '700px', height: '800px' }}>
          <div className='card-title text-center'>
            <img
              className='round-img'
              src={avatar}
              alt={name}
              style={{ width: '200px', height: '200px' }}
            />
            <h1 className='card-title text-center bg-sea'>{name}</h1>
          </div>

          <div className='card-body text-left'>
            <div className='row'>
              <div className='col-lg-4'>
                <h3 className='card-text'>Guardian Name:</h3>
                <p className='card-text'> {guardianname}</p>
              </div>
              <div className='col-lg-4'>
                <h3 className='card-text'>Guardian Phone:</h3>
                <p className='card-text'> {guardianphone}</p>
              </div>
              <div className='col-lg-4'>
                <h3 className='card-text'>English Learner:</h3>
                <p className='card-text'>
                  {englishlearner === false ? (
                    <i
                      className='fas fa-book fa-3x'
                      style={{ color: 'lightgrey' }}
                    ></i>
                  ) : (
                    <i
                      className='fas fa-book fa-3x'
                      style={{ color: 'blue' }}
                    ></i>
                  )}
                </p>
              </div>
            </div>
            <div className='row py-4'>
              <div className='col-lg-4'>
                <h3>Resource Student:</h3>
                <p className='card-text'>
                  {resourcestudent === false ? (
                    <i
                      className='fas fa-pencil-ruler fa-3x'
                      style={{ color: 'lightgrey' }}
                    ></i>
                  ) : (
                    <i
                      className='fas fa-pencil-ruler fa-3x'
                      style={{ color: 'purple' }}
                    ></i>
                  )}
                </p>
              </div>
              <div className='col-lg-4'>
                <h3 className='card-text'>Medical</h3>
                {!medical ? (
                  <p className='card-text'>
                    Student does not have any medical conditions.
                  </p>
                ) : (
                  <p className='card-text'>Student has {medical}.</p>
                )}
              </div>
              <div className='col-lg-4'>
                <h3>Teaching Strats:</h3>
                <p className='card-text'>{teachingstrategies}</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <h3>Interests:</h3>
                <p className='card-text'>{interests}</p>
              </div>
              <div className='col-lg-4'>
                <h3>Athlete:</h3>
                {athlete === false ? (
                  <i
                    className='fas fa-basketball-ball fa-3x'
                    style={{ color: 'lightgrey' }}
                  ></i>
                ) : (
                  <i
                    className='fas fa-basketball-ball fa-3x'
                    style={{ color: 'green' }}
                  ></i>
                )}
              </div>
              <div className='col-lg-4'>
                <h3>Goals:</h3>
                <p className='card-text'>{goals}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </tbody>
  );
}

export default Student;
