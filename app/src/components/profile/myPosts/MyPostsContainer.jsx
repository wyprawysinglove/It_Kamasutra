import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts';
// import s from './myPosts.module.css'
// import Post from './post/Post';

// const MyPostsContainer = (props) => {
//   //debugger
//   let state=props.store.getState()

//   let addPost=()=>{
//     let action=addPostActionCreator()
//     props.store.dispatch(action)
//   }

//   let onPostChange=(text)=>{
//     let action=updateNewPostTextActionCreator(text)
//     props.store.dispatch(action)
//   }
  
//   return (
//     <MyPosts updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts} 
//             newPostText={state.profilePage.newPostText} ></MyPosts>
//   )
// }

let mapStateToProps=(state)=>{
  return{
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}

let mapDispatchToProps=(dispatch)=>{
  return{
    updateNewPostText:(text)=>{
          let action=updateNewPostTextActionCreator(text)
          dispatch(action)
        },
    addPost:()=>{
          let action=addPostActionCreator()
          dispatch(action)
        }
  }
}

const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;