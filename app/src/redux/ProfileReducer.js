
const add_post='add_post'
const update_new_post_text='update_new_post_text'

 const ProfileReducer=(state, action)=>{

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