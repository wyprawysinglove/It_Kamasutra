import React from 'react';
import './profile.css'

const Profile = () => {
  return (
    <div className='content'>
      Main content
      <div className='headPict'>
        <div className='picture'></div>
      </div>
      <div>avatar+ description</div>
      <div>My post
        <div>New posts</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
          <div>Post3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;