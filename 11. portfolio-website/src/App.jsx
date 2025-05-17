import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'/>
          <Route path='/about'/>
          <Route path='/portfolio'/>
          <Route path='/clients'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;