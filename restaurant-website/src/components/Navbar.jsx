import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import restarantLogo from "../assets/restaurant-logo.png"



export default function Navbar() {

  const navigate = useNavigate();

  function handleCLickLogo() {
    navigate('/');
  }

  return(
    <nav className="nav-bar-container">
      <img onClick={handleCLickLogo}
      className="logo"
      src={restarantLogo} alt="logo" />
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