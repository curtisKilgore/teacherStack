import React from 'react';

function CommentForm() {
  return (
    <div className='post-form'>
      <div className='bg-sea p'>
        <h3>Make a comment...</h3>
      </div>
      <form action='' className='form my-1'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment Text Here'
        ></textarea>
        <input type='submit' className='btn btn-coral my-1' />
      </form>
    </div>
  );
}

export default CommentForm;
