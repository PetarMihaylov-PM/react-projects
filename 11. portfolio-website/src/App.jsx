import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';


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
      <About />
      <Portfolio />
    </div>
  )
}

export default App;