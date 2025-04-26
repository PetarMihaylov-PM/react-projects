import { menuItems } from "../assets/menu";
import { useOutletContext } from "react-router-dom";

export default function Menu(){

  const { filtered, addToCart, itemAddedId } = useOutletContext();

  const renderMenu = filtered.map(food => 
    <div key={food.id} className="menu-card">
      <img src={food.image} alt={food.name} />
      <h1 className="card-name">{food.name}</h1>
      <h5 className="card-description">{food.description}</h5>
      <h6 className="card-price">{food.price}</h6>
      <button className="card-button" onClick={() => addToCart(food)}>Add to cart</button>
      {itemAddedId === food.id ? 
        <div className="added-message">
          <h3>Added</h3>
        </div>
        : 
        null
      }
    </div>
  )


  return(
    <>
     {filtered.length > 0 ? 
      <div className="menu-container">
          {renderMenu}
      </div> 
      :
      <div className="not-found">
        <h1>This dish is not on the menu.</h1>
      </div>
      }
    </>
     
  )
}