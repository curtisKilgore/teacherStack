import React, { Fragment } from 'react';
import Student from './Student';

function ListingsContainer() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ListingsContainer;
