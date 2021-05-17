
const update_new_message_body='update_new_message_body'
const send_message='send_message'

let initialState={
    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messagesData: [
        { id: 1, message: 'Hi, Bro !' },
        { id: 2, message: 'How is your IT-Kamasutra' },
        { id: 3, message: 'Good !' }
    ],
    newMessageBody:''
}

const DialogsReducer=(state=initialState, action)=>{

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