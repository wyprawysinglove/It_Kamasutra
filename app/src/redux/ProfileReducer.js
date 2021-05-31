
const add_post='add_post'
const update_new_post_text='update_new_post_text'
const SET_USER_PROFILE='SET_USER_PROFILE'

let initialState={
    posts: [
        { id: 1, message: 'Hallo ! How are you?', likeCount: 12 },
        { id: 2, message: "It's my first post !", likeCount: 9 }
    ],
    newPostText: 'it-kamasutra.com',
    profile:null
}

 const ProfileReducer=(state=initialState, action)=>{

    switch(action.type){
        case add_post:
            return{
                ...state,
                posts:[...state.posts,
                    {
                        id: state.posts.length + 1,
                        message: state.newPostText,
                        likeCount: 22
                        }],
                newPostText:''
            }
        case update_new_post_text:
            return{
                ...state,
                newPostText:action.newText
            }    
        case SET_USER_PROFILE:
            return{
                ...state,
                profile:action.profile
            }    
        
        default: return state;
    }

}

export const addPostActionCreator=()=>({type:add_post})
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator=(text)=>{
    return {type:update_new_post_text, newText:text}
}

export default ProfileReducer