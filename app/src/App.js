
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//import Dialogs from './components/dialogs/Dialogs';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
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

          <Route path='/profile' render={()=><Profile  store={props.store} ></Profile>}></Route>
          {/* <Route path='/profile' render={()=><Profile  state={props.state.ProfileReducer} dispatch={props.dispatch} ></Profile>}></Route> */}
          <Route path='/dialogs' render={()=><DialogsContainer  store={props.store}></DialogsContainer>}></Route>
          {/* <Route path='/dialogs' render={()=><Dialogs  state={props.state.DialogsReducer} dispatch={props.dispatch}></Dialogs>}></Route> */}

          <Route path='/users' render={()=><UsersContainer></UsersContainer>}></Route>

      </div>
    </div>
  )
}

export default App