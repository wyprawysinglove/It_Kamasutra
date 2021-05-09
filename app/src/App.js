
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
//import headerImg from './img/header.jpg'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/dialogs' component={Dialogs}></Route>
        {/* <Dialogs></Dialogs>
        <Profile></Profile> */}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App