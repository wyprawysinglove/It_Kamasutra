import React from 'react';
import s from './myPosts.module.css'
import Post from './post/Post';

const MyPosts = () => {
  return (
    <div className={s.postBlock}>My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message='Hallo ! How are you?' aClass={true}></Post>
          <Post message="It's my first post !"></Post>
          <Post></Post>
        </div>
      </div>
  )
}

export default MyPosts;