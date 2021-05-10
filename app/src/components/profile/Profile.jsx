import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      <MyPosts></MyPosts>
      
    </div>
  )
}

export default Profile;