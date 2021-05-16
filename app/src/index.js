import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/State';
import { BrowserRouter } from 'react-router-dom';
//import { renderEntireTree } from './render';

 let callSubscriber=()=>{
  ReactDOM.render(
    <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

callSubscriber()
store.subscribe(callSubscriber)
// ReactDOM.render(
//   <React.StrictMode>
//     <App dialogsData={dialogsData} messagesData={messagesData} posts={posts} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
