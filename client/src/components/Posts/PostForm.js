import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

function PostForm({ addPost }) {
  const [text, setText] = useState('');
  return (
    <div className='post-form'>
      <div className='bg-sea p'>
        <h3>Make a post...</h3>
      </div>
      <form
        action=''
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Post Text Here'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <input type='submit' className='btn btn-coral my-1' value='Submit' />
      </form>
    </div>
  );
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
