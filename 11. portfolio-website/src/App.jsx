import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;