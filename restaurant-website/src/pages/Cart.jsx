import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import deleteIcon from '../assets/delete-icon.png'
import minusIcon from '../assets/minus-icon.svg'
import plusIcon from '../assets/plus-icon.svg'

export default function Cart() {

  const [itemQuantity, setItemQuantity] = useState(1);

  const { cartItems } = useOutletContext();

  function increaseQuantity() {
    if(itemQuantity < 10){
      setItemQuantity(prev => prev + 1);
    }
  }

  function decreaseQuantity() {
    if(itemQuantity > 1){
      setItemQuantity(prev => prev - 1);
    }  
  }

  const renderCartItems = cartItems.map((item, index) => 
      <div 
      key={index}
      className="cart-item-card">
        <img 
          className="food-img"
          src={item.image} 
          alt="food pic" />
        <h3 
          className="cart-item-name"
        >
          {item.name}
        </h3>
        <h3 className="cart-item-price"
        >
          {item.price}
        </h3>
        <div className="cart-item-quantity-container">
          <button
            onClick={decreaseQuantity}
          >
            <img src={minusIcon}/>
          </button>
          <h3>{itemQuantity}</h3>

          <button
            onClick={increaseQuantity}
          >
            <img src={plusIcon}/>
          </button>
        </div>
        <img 
          className="delete-icon"
          src={deleteIcon} alt="delete-icon" />
      </div>
  );

  return(
    <div className="cart-container">
      <header>
        <h1>Your <span>Cart</span></h1>
      </header>
      <main className="orders-cart-container">
        {cartItems.length > 0 ? 
          renderCartItems
          :
          'Cart is empty'
        }
      </main>
    </div>
  )
}