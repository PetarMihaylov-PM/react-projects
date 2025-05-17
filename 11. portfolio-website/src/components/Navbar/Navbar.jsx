import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="navbar-menu">
        <Link className="navbar-menu-list-item" to='/'>Home</Link>
        <Link className="navbar-menu-list-item" to='/about'>About</Link>
        <Link className="navbar-menu-list-item" to='/portfolio'>Portfolio</Link>
        <Link className="navbar-menu-list-item" to='/clients'>Clients</Link>
      </div>
      <button className="navbar-menu-btn">
        <img src={contactImg} alt="contact-icon" className="dektop-icon" />
        Contact me
      </button>
    </nav>
  )
}

export default Navbar;