
import React from 'react';
import './App.css';
import Dialogs from './components/dialogs/Dialogs';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
//import headerImg from './img/header.jpg'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header></Header>
      <Navbar></Navbar>
      <div className='app-wrapper-content'>
        <Dialogs></Dialogs>
        {/* <Profile></Profile> */}
      </div>
    </div>
  )
}

export default App