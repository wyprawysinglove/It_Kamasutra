import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/DialogsReducer'
import DialogItem from './dialogItem/DialogItem'
import s from './dialogs.module.css'
import Message from './message/Message'

const Dialogs=(props)=>{
    //console.log(props)
    let dialogsElements=props.state.dialogsData.map(el=><DialogItem key={el.id} name={el.name}></DialogItem>);
    let messageElements=props.state.messagesData.map(el=><Message key={el.id} message={el.message}></Message>)
    let newMessageBody=props.state.newMessageBody
    let onSendMessageClick=()=>{
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(e)=>{
        let body=e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesItem}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder='enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

    export default Dialogs