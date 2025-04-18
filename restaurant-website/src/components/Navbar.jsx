import { Link } from "react-router-dom"

export default function Navbar() {
  return(
    <nav className="nav-bar-container">
      <h3 className="restaurant-name">Pete's restaurant</h3>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <img className='search-icon' src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png" alt="search-icon" />
    </nav>
  )
}