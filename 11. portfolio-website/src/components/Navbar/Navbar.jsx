import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="navbar-menu">
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          >Home</Link>
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          >About</Link>
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='portfolio'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          >Portfolio</Link>
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='contact-page'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          >Clients</Link>
      </div>
      <button 
        className="navbar-menu-btn"
        onClick={() => {
          document.getElementById('contact-page').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contactImg} alt="contact-icon" className="dektop-icon" />
        Contact me
      </button>
    </nav>
  )
}

export default Navbar;