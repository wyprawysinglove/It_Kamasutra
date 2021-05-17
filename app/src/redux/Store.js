import DialogsReducer from "./DialogsReducer"
import ProfileReducer from "./ProfileReducer"
import SidebarReducer from "./SidebarReducer"

// const add_post='add_post'
// const update_new_post_text='update_new_post_text'
// const update_new_message_body='update_new_message_body'
// const send_message='send_message'



// export const addPostActionCreator=()=>({type:add_post})
// export const updateNewPostTextActionCreator=(text)=>{
//     return {type:update_new_post_text, newText:text}
// }
// export const sendMessageCreator=()=>({type:send_message})
// export const updateNewMessageBodyCreator=(body)=>{
//     return{type:update_new_message_body, body:body}
// }

let store = {
    _state: {
        profilePage:
        {
            posts: [
                { id: 1, message: 'Hallo ! How are you?', likeCount: 12 },
                { id: 2, message: "It's my first post !", likeCount: 9 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage:
        {
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
        },
        sidebar:{}
        // functions:{
        //     addPost,
        //     updateNewPostText
        // } 
    },
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('state shanged')
    },
    dispatch(action) {
        this._state.profilePage=ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage=DialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar=SidebarReducer(this._state.sidebar, action)

        this.callSubscriber(this._state);

        // if (action.type === add_post) {
        //     let newPost = {
        //         id: this._state.profilePage.posts.length + 1,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: 22
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this.callSubscriber(this._state);
        // } else if (action.type === update_new_post_text) {
        //     this._state.profilePage.newPostText = action.newText
        //     this.callSubscriber(this._state)
        // }else if(action.type===update_new_message_body){
        //     this._state.dialogsPage.newMessageBody=action.body;
        //     this.callSubscriber(this._state);
        // }else if(action.type===send_message){
        //     let body=this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody='';
        //     this._state.dialogsPage.messagesData.push({id: this._state.dialogsPage.messagesData.length+1, message:body});
        //     this.callSubscriber(this._state);
        // }
    },

    // addPost() {
    //     //debugger
    //     let newPost = {
    //         id: this._state.profilePage.posts.length + 1,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 22
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this.callSubscriber(this._state)
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this.callSubscriber(this._state)
    // },
    subscribe(observer) {
        this.callSubscriber = observer
    }

}


export default store
window.store = store