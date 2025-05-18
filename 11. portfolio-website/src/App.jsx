import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio'/>
        <Route path='/clients'/>
      </Routes>
      <Intro />
      <About />
    </div>
  )
}

export default App;