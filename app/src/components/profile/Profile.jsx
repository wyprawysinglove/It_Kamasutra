import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      Main content
      <div className={s.headPict}>
        <div className={s.picture}></div>
      </div>
      <div>avatar+ description</div>
      <MyPosts></MyPosts>
      
    </div>
  )
}

export default Profile;