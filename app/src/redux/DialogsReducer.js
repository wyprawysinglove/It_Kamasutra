
const update_new_message_body='update_new_message_body'
const send_message='send_message'

const DialogsReducer=(state, action)=>{

    switch(action.type){
        case update_new_message_body:state.newMessageBody=action.body; return state;
        case send_message: let body=state.newMessageBody;
        state.newMessageBody='';
        state.messagesData.push({id: state.messagesData.length+1, message:body}); return state;
        default: return state;
    }


    // if(action.type===update_new_message_body){
    //     state.newMessageBody=action.body;
    // }else if(action.type===send_message){
    //     let body=state.newMessageBody;
    //     state.newMessageBody='';
    //     state.messagesData.push({id: state.messagesData.length+1, message:body});
    // }

    // return state;
}

export const sendMessageCreator=()=>({type:send_message})
export const updateNewMessageBodyCreator=(body)=>{
    return{type:update_new_message_body, body:body}
}

export default DialogsReducer