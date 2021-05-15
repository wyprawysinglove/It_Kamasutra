let renderEntireTree


let state

 let addPost=()=>{
    let newPost={
        id:state.profilePage.posts.length+1,
        message:state.profilePage.newPostText,
        likeCount:22
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    renderEntireTree(state)
}
let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText
    renderEntireTree(state)
}

export const subscribe=(observer)=>{
    renderEntireTree=observer
}


  state={
    profilePage:
        {posts:[
            {id:1, message:'Hallo ! How are you?', likeCount:12},
            {id:2, message:"It's my first post !", likeCount:9}
        ],
        newPostText:'it-kamasutra.com'},
    dialogsPage:
        {dialogsData:[
            {id:1, name:'Dimych'},
            {id:2, name:'Andrey'},
            {id:3, name:'Sveta'},
            {id:4, name:'Sasha'},
            {id:5, name:'Viktor'},
            {id:6, name:'Valera'}
        ],
        messagesData:[
            {id:1, message:'Hi, Bro !'},
            {id:2, message:'How is your IT-Kamasutra'},
            {id:3, message:'Good !'}
        ]},
    functions:{
        addPost,
        updateNewPostText
    } 
}



export default state