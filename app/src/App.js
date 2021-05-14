
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
//import headerImg from './img/header.jpg'


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
          {/* <Route path='/profile' render={()=>{return Profile(props.state.profilePage)}}></Route>
          <Route path='/dialogs' render={()=>{return(Dialogs(props.state.dialogsPage))}}></Route> */}

          <Route path='/profile' render={()=><Profile  state={props.state.profilePage}></Profile>}></Route>
          <Route path='/dialogs' render={()=><Dialogs  state={props.state.dialogsPage}></Dialogs>}></Route>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App