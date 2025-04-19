import { menuItems } from "../assets/menu"

export default function Menu(){

  const renderMenu = menuItems.map((food, index) => 
    <div key={index}>
      <img src={food.image} alt={food.name} />
      <h4>{food.name}</h4>
      <h5>{food.description}</h5>
      <h6>{food.price}</h6>
    </div>
  )


  return(
      <div className="menu-container">
        {renderMenu}
      </div>
  )
}