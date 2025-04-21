import fbLogo from "../assets/fb-logo.png"

export default function Footer() {
  return(
    <div className="footer-container">
      <img src="https://static-00.iconduck.com/assets.00/instagram-fill-icon-2048x2048-129c4vdo.png" alt="insta" />
      <img src={fbLogo} alt="fb" />
      <img src="https://cdn-icons-png.flaticon.com/512/665/665228.png" alt="twitter" />
    </div>
  )
}