import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../Posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

function Post() {
  return (
    <div className='container'>
      <Link to='/posts' className='btn btn-sea'>
        {' '}
        Back to Posts
      </Link>
      <PostItem />
      <CommentForm />
      <div className='comments'>
        <CommentItem />
      </div>
    </div>
  );
}

export default Post;
