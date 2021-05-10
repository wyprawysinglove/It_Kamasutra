import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './dialogs.module.css'

const Dialogs=()=>{
    return(
        <div className={s.dialogs}> 
            <div className={s.dialogsItem}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialogs/2'>Andrey</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialogs/3'>Sveta</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialogs/4'>Sasha</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialogs/5'>Viktor</NavLink></div>
                <div className={`${s.dialog} ${s.active}`}>
                <NavLink to='/dialogs/6'>Valera</NavLink></div>
            </div>
            <div className={s.messagesItem}>
                <div className={s.message}>Hi !</div>
                <div className={s.message}>How is your IT-Kamasutra</div>
                <div className={s.message}>Good</div>
            </div>
        </div>
    )
}

    export default Dialogs