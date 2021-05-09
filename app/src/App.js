
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
//import headerImg from './img/header.jpg'


const App = () => {
  return (
    <div className='app-wraper'>
     <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  )
}

export default App