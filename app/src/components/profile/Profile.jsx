import React from 'react';
import MyPosts from './myPosts/MyPosts';
//import s from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  //debugger;
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}></MyPosts>
      
    </div>
  )
}

export default Profile;