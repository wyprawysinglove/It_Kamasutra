import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../dialogs.module.css'

const DialogItem=(props)=>{
    let path='/dialogs/'+props.id;
    let dialogsClass=`${s.dialog} ${props.aClass}`
    return(
        <div className={dialogsClass}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

    export default DialogItem