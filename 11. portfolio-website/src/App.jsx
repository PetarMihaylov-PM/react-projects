import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/'/>
        <Route path='/about'/>
        <Route path='/portfolio'/>
        <Route path='/clients'/>
      </Routes>
      <Intro />
    </div>
  )
}

export default App;