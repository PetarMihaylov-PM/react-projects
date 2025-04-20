import { menuItems } from "../assets/menu";
import { useOutletContext } from "react-router-dom";

export default function Menu(){

  const { filtered } = useOutletContext();

  const renderMenu = filtered.map((food, index) => 
    <div key={index} className="menu-card">
      <img src={food.image} alt={food.name} />
      <h1 className="card-name">{food.name}</h1>
      <h5 className="card-description">{food.description}</h5>
      <h6 className="card-price">{food.price}</h6>
    </div>
  )


  return(
      <div className="menu-container">
        {filtered.length > 0 ? renderMenu : 'Dish not found. :('}
      </div>
  )
}