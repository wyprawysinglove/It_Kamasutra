import React from 'react';
import s from './post.module.css'

const Post = (props) => {
  //debugger
  let act=(props.aClass)?s.active:null;
  let postClass=`${s.item} ${act}`
  return (
    <div className={postClass}>
      <img src='https://image.flaticon.com/icons/png/512/194/194938.png' alt='avatar'></img>
      <div >{props.message}</div>
  </div>
  )
}

export default Post;