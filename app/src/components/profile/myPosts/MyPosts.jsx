import React from 'react';
import s from './myPosts.module.css'
import Post from './post/Post';

const MyPosts = (props) => {
  
  return (
    <div className={s.postBlock}>My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
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