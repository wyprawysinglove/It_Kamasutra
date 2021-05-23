import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/DialogsReducer'
// import DialogItem from './dialogItem/DialogItem'
import Dialogs from './Dialogs'
// import s from './dialogs.module.css'
// import Message from './message/Message'

// const DialogsContainer=(props)=>{
//     //debugger
//     let state=props.store.getState()
//     let onSendMessageClick=()=>{
//         props.store.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange=(body)=>{
//         //debugger
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//     return(
//         <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsData={state.dialogsPage.dialogsData}
//                 messagesData={state.dialogsPage.messagesData}
//                 newMessageBody={state.dialogsPage.newMessageBody}>
//         </Dialogs>
//     )
// }

let mapStateToProps=(state)=>{
    return{
        // dialogsPage:state.dialogsPage
        dialogsData:state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        newMessageBody:state.dialogsPage.newMessageBody
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer=connect(mapStateToProps, mapDispatchToProps)(Dialogs)

    export default DialogsContainer