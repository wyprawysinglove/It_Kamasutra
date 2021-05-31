import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import s from './profileInfo.module.css'

const ProfileInfo=(props)=>{
    if(!props.profile){
        return <Preloader></Preloader>
    }
    return(
        <div>
            <div className={s.headPict}>
                <div className={s.picture}></div>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large}></img>
                avatar+ description
            </div>
        </div>
    )
}

export default ProfileInfo