import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        fullName: 'Sasha',
        status: 'I am a boss too',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        followed: false,
        photoUrl:
          'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        fullName: 'Dmitry',
        status: 'I am a boss too',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
    ])
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
