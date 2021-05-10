import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'

const DialogsItem=(props)=>{
    let path='/dialogs/'+props.id;
    let dialogsClass=`${s.dialog} ${props.aClass}`
    return(
        <div className={dialogsClass}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs=()=>{
    return(
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                <DialogsItem id='1' name='Dimych' aClass={s.active}></DialogsItem>
                <DialogsItem id='2' name='Andrey'></DialogsItem>
                <DialogsItem id='3' name='Sveta'></DialogsItem>
                <DialogsItem id='4' name='Sasha'></DialogsItem>
                <DialogsItem id='5' name='Viktor'></DialogsItem>
                <DialogsItem id='6' name='Valera'></DialogsItem>
            </div>
            <div className={s.messagesItem}>
                <Message message='Hi !'></Message>
                <Message message='How is your IT-Kamasutra'></Message>
                <Message message='Good'></Message>
            </div>
        </div>
    )
}

    export default Dialogs