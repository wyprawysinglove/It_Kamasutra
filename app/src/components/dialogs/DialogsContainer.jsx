import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/DialogsReducer'
// import DialogItem from './dialogItem/DialogItem'
import Dialogs from './Dialogs'
// import s from './dialogs.module.css'
// import Message from './message/Message'

const DialogsContainer=(props)=>{
    //debugger
    let state=props.store.getState()
    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange=(body)=>{
        //debugger
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
        <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsData={state.DialogsReducer.dialogsData}
                messagesData={state.DialogsReducer.messagesData}
                newMessageBody={state.DialogsReducer.newMessageBody}>
        </Dialogs>
    )
}

    export default DialogsContainer