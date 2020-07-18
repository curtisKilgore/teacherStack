import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

function PostItem() {
  const [post, setPost] = useState({
    user: 'Derek Glassick',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQGnOYxJKzBwUw/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=YsaPebInIxjipk5dWeuBKn3xMzTsa9oNdqSY1JFEzPQ',
    title: 'Help with Sentence Frames',
    text:
      "Hey Everyone, I was wondering if anyone had any good resources on how to incorporate sentence frames into a lesson. I don't want to just give an answer to a student, but do want to push them in the right direction.",
    comments: [{ text: 'hey' }, { text: 'hey' }],
    date: '10/8/2020'
  });

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile`}>
          <img className='round-img' src={post.avatar} alt='user' />
          <h4>{post.user}</h4>
        </Link>
      </div>
      <div>
        <h4>{post.title}</h4>
        <p className='my-1'>{post.text}</p>
        <p className='post-date'> Posted on {post.date}</p>
        <Fragment>
          <Link to={`/post`} className='btn btn-blue'>
            Comments{' '}
            {post.comments.length > 0 && (
              <span className='comment-count'> {post.comments.length}</span>
            )}
          </Link>
        </Fragment>
      </div>
    </div>
  );
}

export default PostItem;
