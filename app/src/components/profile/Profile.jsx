import React from 'react';
//import MyPosts from './myPosts/MyPosts';
import MyPostsContainer from './myPosts/MyPostsContainer';
//import s from './profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
  //debugger;
  return (
    <div >
      <ProfileInfo></ProfileInfo>
      {/* <MyPostsContainer posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch}></MyPostsContainer> */}
      <MyPostsContainer store={props.store}></MyPostsContainer>
      
    </div>
  )
}

export default Profile;