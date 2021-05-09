import React from 'react';
import s from './profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      Main content
      <div className={s.headPict}>
        <div className={s.picture}></div>
      </div>
      <div>avatar+ description</div>
      <div>My post
        <div>New posts</div>
        <div>
          <div className={s.item}>Post11111</div>
          <div className={s.item}>Post2</div>
          <div className={s.item}>Post3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;