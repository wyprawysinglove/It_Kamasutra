import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      <MyPosts posts={props.posts}></MyPosts>
      
    </div>
  )
}

export default Profile;