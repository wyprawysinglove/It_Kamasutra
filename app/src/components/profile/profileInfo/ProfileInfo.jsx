import React from 'react'
import s from './profileInfo.module.css'

const ProfileInfo=()=>{
    return(
        <div>
            <div className={s.headPict}>
                <div className={s.picture}></div>
            </div>
            <div className={s.description}>avatar+ description</div>
        </div>
    )
}

export default ProfileInfo