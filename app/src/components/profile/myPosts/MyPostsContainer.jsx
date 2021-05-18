import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
// import s from './myPosts.module.css'
// import Post from './post/Post';

const MyPostsContainer = (props) => {
  //debugger
  let state=props.store.getState()

  let addPost=()=>{
    let action=addPostActionCreator()
    props.store.dispatch(action)
  }

  let onPostChange=(text)=>{
    let action=updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }
  
  return (
    <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.ProfileReducer.posts} 
            newPostText={state.ProfileReducer.newPostText} ></MyPosts>
  )
}

export default MyPostsContainer;