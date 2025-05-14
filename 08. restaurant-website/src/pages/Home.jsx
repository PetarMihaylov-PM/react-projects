import { useNavigate } from "react-router-dom"

export default function Home(){

  const navigate = useNavigate();

  function handleClick() {
    navigate('/menu');
  }

  return(
    <>
    <div className="home-container">
      <h3>Hungry for food? Or just good vibes?</h3>
      <h4>Either way, you’ve come to the right plate.</h4>
      <button className="menu-button" onClick={handleClick}>Menu</button>
    </div>
    </>
  )
}