import React, { useState } from 'react';
import ProfileTop from './ProfileTop';

function Profile() {
  // list name, email, avatar, class schedule (hyperlink to go to that class), to do list?
  const [teacher, setTeacher] = useState({
    name: 'Derek Glassick',
    email: 'dglassick@valverde.edu',
    school: 'Orange Vista High School',
    team: '10th Grade',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQGnOYxJKzBwUw/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=YsaPebInIxjipk5dWeuBKn3xMzTsa9oNdqSY1JFEzPQ',
    classSchedule: [
      {
        period: 1,
        title: 'English 10'
      },
      {
        period: 2,
        title: 'AVID 10'
      },
      {
        period: 4,
        title: 'English 10'
      },
      {
        period: 5,
        title: 'English 10'
      },
      {
        period: 6,
        title: 'English 10'
      }
    ]
  });
  const { name, email, avatar, classSchedule } = teacher;

  const [todo, setTodo] = useState([
    {
      item: 'Grade 1st Period Essay',
      deadline: 'Wednedsay'
    },
    {
      item: 'Call Home for Bobby Sims',
      deadline: 'Thursday'
    },
    {
      item: 'Meet with RSP Teacher',
      deadline: 'Friday'
    },
    {
      item: 'Plan for AVID 10',
      deadline: 'Monday'
    }
  ]);

  return (
    <div className='container'>
      <div className='profile-grid my-1'>
        <ProfileTop teacher={teacher} />
        <div className='profile-schedule bg-white p-2'>
          <h2 className='text-primary'>Class Schedule</h2>
          <hr />
          <ul>
            {classSchedule.map(course => {
              return (
                <li>
                  {course.period}. {course.title}{' '}
                  <button className='btn-coral'>View Class</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='profile-todo bg-white p-2'>
          <h2 className='text-primary'>To Do List</h2>
          <hr />
          <ul>
            {todo.map(task => {
              return (
                <li>
                  <i class='fas fa-check'></i> Task: {task.item} Deadline:{' '}
                  {task.deadline}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
