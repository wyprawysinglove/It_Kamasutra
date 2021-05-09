import React from 'react';
import s from './post.module.css'

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://image.flaticon.com/icons/png/512/194/194938.png' alt='avatar'></img>
      <div >Post1</div>
  </div>
  )
}

export default Post;