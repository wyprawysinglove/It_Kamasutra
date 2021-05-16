
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
            ]
        }
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
        if (action.type === 'add_post') {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 22
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this.callSubscriber(this._state);
        } else if (action.type === 'update_new_post_text') {
            this._state.profilePage.newPostText = action.newText
            this.callSubscriber(this._state)
        }
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