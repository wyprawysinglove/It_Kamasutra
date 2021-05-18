import React from 'react';
//import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import s from './myPosts.module.css'
import Post from './post/Post';

const MyPosts = (props) => {
  //debugger

  let newPostElement=React.createRef()

  let onAddPost=()=>{
    props.addPost()
  }

  let onPostChange=()=>{
    let text=newPostElement.current.value
    props.updateNewPostText(text)
  }
  
  return (
    <div className={s.postBlock}>My post
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
          <button onClick={onAddPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {props.posts.map(el=><Post key={el.id} message={el.message} likeCount={el.likeCount}></Post>)}
        </div>
      </div>
  )
}

export default MyPosts;