
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//import Dialogs from './components/dialogs/Dialogs';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import ProfileContainer from './components/profile/ProfileContainer';
//import Users from './components/users/Users';
import UsersContainer from './components/users/UsersContainer';
//import headerImg from './img/header.jpg'


const App = (props) => {
  //debugger
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>

          <Route path='/profile/:userId?' render={()=><ProfileContainer></ProfileContainer>}></Route>
          {/* <Route path='/profile' render={()=><Profile  store={props.store} ></Profile>}></Route> */}
          <Route path='/dialogs' render={()=><DialogsContainer  store={props.store}></DialogsContainer>}></Route>

          <Route path='/users' render={()=><UsersContainer></UsersContainer>}></Route>

      </div>
    </div>
  )
}

export default App