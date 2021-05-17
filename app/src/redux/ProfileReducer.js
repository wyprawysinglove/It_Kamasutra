
const add_post='add_post'
const update_new_post_text='update_new_post_text'

let initialState={
    posts: [
        { id: 1, message: 'Hallo ! How are you?', likeCount: 12 },
        { id: 2, message: "It's my first post !", likeCount: 9 }
    ],
    newPostText: 'it-kamasutra.com'
}

 const ProfileReducer=(state=initialState, action)=>{

    switch(action.type){
        case add_post:let newPost = {
            id: state.posts.length + 1,
            message: state.newPostText,
            likeCount: 22
        };
        state.posts.push(newPost);
        state.newPostText = ''; return state;
        case update_new_post_text:state.newPostText = action.newText; return state;
        default: return state;
    }

    // if (action.type === add_post) {
    //     let newPost = {
    //         id: state.posts.length + 1,
    //         message: state.newPostText,
    //         likeCount: 22
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === update_new_post_text) {
    //     state.newPostText = action.newText
    // }

    // return state;
}

export const addPostActionCreator=()=>({type:add_post})
export const updateNewPostTextActionCreator=(text)=>{
    return {type:update_new_post_text, newText:text}
}

export default ProfileReducer