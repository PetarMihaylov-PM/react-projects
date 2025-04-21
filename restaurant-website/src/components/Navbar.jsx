import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import restarantLogo from "../assets/restaurant-logo.png"


export default function Navbar({onSearch}) {

  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  function handleCLickLogo() {
    navigate('/');
  }

  function handleSearchChange (e) {
    const value = e.currentTarget.value;
    setSearchTerm(value);
    onSearch(value);
    navigate('/menu');
  }

  function toggleSearchBar() {
    setShowSearch(prev => !prev);
  }

  return(
    <nav className="nav-bar-container">
      <div className="nav-left">
      <img 
        onClick={handleCLickLogo}
        className="logo"
        src={restarantLogo} 
        alt="logo" />
      </div>
      
      <div className="nav-center">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      
      <div className={`search-container ${showSearch ? 'show' : ''}`}>
        
          <input 
            type="text"
            placeholder="Search food..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        <img 
          onClick={toggleSearchBar}
          className='search-icon' 
          src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png" 
          alt="search-icon" 
        />
      </div>
    </nav>
  )
}