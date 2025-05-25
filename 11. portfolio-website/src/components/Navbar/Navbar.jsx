import React, { useState } from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav-bar">
      <img src={logo2} alt="logo" className='logo'/>
      <div className="navbar-menu">
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >Home</Link>
        <Link 
          className="navbar-menu-list-item" 
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-70}
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
          to='skills'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          >Skills</Link>
      </div>
      <Link
        to='contact-page'
        smooth={true}
        offset={-50}
        duration={500}>
        <button 
        className="navbar-menu-btn"
        >
        <img src={contactImg} alt="contact-icon" className="dektop-icon" />
        Contact me
      </button>
      </Link>
      

      <img 
        src={menu} 
        alt="Menu" 
        className='mobile-menu-img'
        onClick={() => setShowMenu(!showMenu)}/>
      <div 
        className="mobile-menu" 
        style={{display: showMenu ? 'flex' : 'none'}}>
        <Link 
          className="list-item" 
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          >Home</Link>
        <Link 
          className="list-item" 
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          >About</Link>
        <Link 
          className="list-item" 
          activeClass='active'
          to='portfolio'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          >Portfolio</Link>
        <Link 
          className="list-item" 
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          >Skills</Link>
           <Link 
          className="list-item" 
          activeClass='active'
          to='contact-page'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          >Contact </Link>
      </div>
    </nav>
  )
}

export default Navbar;