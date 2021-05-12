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
    let dialogsData=[
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'}
    ]

    let messagesData=[
        {id:1, message:'Hi !'},
        {id:2, message:'How is your IT-Kamasutra'},
        {id:3, message:'Good !'}
    ]
    return(
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {/* <DialogsItem id='1' name='Dimych' aClass={s.active}></DialogsItem>
                <DialogsItem id='2' name='Andrey'></DialogsItem>
                <DialogsItem id='3' name='Sveta'></DialogsItem>
                <DialogsItem id='4' name='Sasha'></DialogsItem>
                <DialogsItem id='5' name='Viktor'></DialogsItem>
                <DialogsItem id='6' name='Valera'></DialogsItem> */}
                {dialogsData.map(el=><DialogsItem key={el.id} name={el.name}></DialogsItem>)}
            </div>
            <div className={s.messagesItem}>
                {/* <Message message='Hi !'></Message>
                <Message message='How is your IT-Kamasutra'></Message>
                <Message message='Good'></Message> */}
                {messagesData.map(el=><Message key={el.id} message={el.message}></Message>)}
            </div>
        </div>
    )
}

    export default Dialogs