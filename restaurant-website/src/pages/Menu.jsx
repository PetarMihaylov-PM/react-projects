import { menuItems } from "../assets/menu"

export default function Menu(){

  const renderMenu = menuItems.map((food, index) => 
    <div key={index} className="menu-card">
      <img src={food.image} alt={food.name} />
      <h1 className="card-name">{food.name}</h1>
      <h5 className="card-description">{food.description}</h5>
      <h6 className="card-price">{food.price}</h6>
    </div>
  )


  return(
      <div className="menu-container">
        {renderMenu}
      </div>
  )
}