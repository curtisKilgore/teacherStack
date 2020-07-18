import React from 'react';

function PostForm() {
  return (
    <div className='post-form'>
      <div className='bg-sea p'>
        <h3>Make a post...</h3>
      </div>
      <form action='' className='form my-1'>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Post Text Here'
        ></textarea>
        <input type='submit' className='btn btn-coral my-1' />
      </form>
    </div>
  );
}

export default PostForm;
