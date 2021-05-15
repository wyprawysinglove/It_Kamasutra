import React from 'react';
import s from './myPosts.module.css'
import Post from './post/Post';

const MyPosts = (props) => {

  let newPostElement=React.createRef()
  // let addPost=()=>{
  //   let text=newPostElement.current.value
  //   console.log(text)
  // }
  let addPost=()=>{
    let text=newPostElement.current.value
    props.func.addPost(text)
    newPostElement.current.value=''
  }
  
  return (
    <div className={s.postBlock}>My post
        <div>
          <textarea  ref={newPostElement}></textarea>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
          {/* <Post message='Hallo ! How are you?' aClass={true}></Post>
          <Post message="It's my first post !"></Post>
          <Post></Post> */}
          {props.posts.map(el=><Post key={el.id} message={el.message} likeCount={el.likeCount}></Post>)}
        </div>
      </div>
  )
}

export default MyPosts;