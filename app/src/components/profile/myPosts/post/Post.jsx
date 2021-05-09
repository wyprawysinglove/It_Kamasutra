import React from 'react';
import s from './post.module.css'

const Post = (props) => {
  //debugger
  return (
    <div className={s.item}>
      <img src='https://image.flaticon.com/icons/png/512/194/194938.png' alt='avatar'></img>
      <div >{props.message}</div>
  </div>
  )
}

export default Post;