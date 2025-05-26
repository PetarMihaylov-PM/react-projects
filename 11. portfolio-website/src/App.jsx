import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Fireflies from './components/Fireflies/Fireflies';



const App = () => {
  return (
    <div className='App'>
      <Fireflies />
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;