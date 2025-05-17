import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" />
      <div className="desktop-menu">

      </div>
      <button className="desktop-menu-btn">
        <img src="" alt="" className="dektop-icon" />
        Contact me
      </button>
    </nav>
  )
}

export default Navbar;