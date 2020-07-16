import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CommentItem() {
  const [comments, useComments] = useState([
    {
      text:
        'I would definitely try and make the sentence frame as vague as possible. You really want to give students something they feel comfortable using, and still allow them to use their own voice.',
      user: 'Brandon P',
      avater:
        'https://images-na.ssl-images-amazon.com/images/I/519AOHTCs5L._AC_.jpg',
      date: '10/8/2020'
    },
    {
      text: 'Awesome! Thanks Mr. P, I thought that was the right direction!',
      user: 'Derek Glassick',
      avater:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGnOYxJKzBwUw/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=YsaPebInIxjipk5dWeuBKn3xMzTsa9oNdqSY1JFEzPQ',
      date: '10/8/2020'
    }
  ]);
  return (
    <div>
      {comments.map(comment => {
        return (
          <div className='post bg-white p-q my-1'>
            <div>
              <Link to={`/profil/user`}>
                <img src={comment.avater} alt='user' className='round-img' />
                <h4>{comment.user}</h4>
              </Link>
            </div>
            <div>
              <p className='my-1'>{comment.text}</p>
              <p className='post-date'>Posted on {comment.date}</p>
              <button className='btn btn-danger' type='button'>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentItem;
