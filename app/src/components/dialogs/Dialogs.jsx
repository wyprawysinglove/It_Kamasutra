import React from 'react'
import DialogItem from './dialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './message/Message'

const Dialogs=(props)=>{
    //console.log(props)
    return(
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {props.dialogsData.map(el=><DialogItem key={el.id} name={el.name}></DialogItem>)}
            </div>
            <div className={s.messagesItem}>
                {props.messagesData.map(el=><Message key={el.id} message={el.message}></Message>)}
            </div>
        </div>
    )
}

    export default Dialogs