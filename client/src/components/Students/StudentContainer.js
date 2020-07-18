import React from 'react';
import Student from './Student';

function ListingsContainer() {
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <th>Student Name</th>
          <th>Student Grade</th>
          <th>Athlete</th>
          <th>EL Student</th>
          <th>Resource Student</th>
          <th>Medical</th>
        </thead>
        <Student />
      </table>
    </div>
  );
}

export default ListingsContainer;
