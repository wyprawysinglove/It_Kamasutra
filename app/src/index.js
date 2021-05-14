import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData=[
  {id:1, name:'Dimych'},
  {id:2, name:'Andrey'},
  {id:3, name:'Sveta'},
  {id:4, name:'Sasha'},
  {id:5, name:'Viktor'},
  {id:6, name:'Valera'}
]

let messagesData=[
  {id:1, message:'Hi, Bro !'},
  {id:2, message:'How is your IT-Kamasutra'},
  {id:3, message:'Good !'}
]

let posts=[
  {id:1, message:'Hallo ! How are you?', likeCount:12},
  {id:2, message:"It's my first post !", likeCount:4}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
