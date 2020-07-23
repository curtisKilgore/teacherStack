import React, { Fragment, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/profile';

const AddToDo = ({ addTodo, history }) => {
  const [formData, setFormData] = useState({
    task: '',
    deadline: ''
  });

  const { task, deadline } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-sea'>Add a ToDo</h1>
      <h4 className='lead'>
        <i className='fas fa-calendar'></i> Add a todo item to your list to help
        stay organized.
      </h4>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addTodo(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Task'
            name='task'
            value={task}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h4 className='lead'>Deadline Date</h4>
          <input
            type='date'
            name='deadline'
            value={deadline}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-sea my-1' />
        <Link className='btn btn-coral my-1' to='/profile'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(withRouter(AddToDo));
