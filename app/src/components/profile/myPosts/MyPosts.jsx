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
    //debugger
    // let text=newPostElement.current.value
    // props.func.addPost(text)
    ////newPostElement.current.value=''
    //////props.addPost()
    props.dispatch({type:'add_post'})
  }

  let onPostChange=()=>{
    let text=newPostElement.current.value
    //////props.updateNewPostText(text)
    props.dispatch({type:'update_new_post_text', newText:text})
  }
  
  return (
    <div className={s.postBlock}>My post
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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