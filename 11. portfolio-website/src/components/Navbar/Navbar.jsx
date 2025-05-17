import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="desktop-menu">
        <Link className="desktop-menu-list-item" to='/'>Home</Link>
        <Link className="desktop-menu-list-item" to='/about'>About</Link>
        <Link className="desktop-menu-list-item" to='/portfolio'>Portfolio</Link>
        <Link className="desktop-menu-list-item" to='/clients'>Clients</Link>
      </div>
      <button className="desktop-menu-btn">
        <img src="" alt="" className="dektop-icon" />
        Contact me
      </button>
    </nav>
  )
}

export default Navbar;