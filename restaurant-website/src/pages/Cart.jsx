import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import deleteIcon from '../assets/delete-icon.png'

export default function Cart() {

  const { cartItems } = useOutletContext();

  const renderCartItems = cartItems.map((item, index) => 
      <div 
      key={index}
      className="cart-item">
        <img src={item.image} alt="food pic" />
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
        <input type="number" />
        <img src={deleteIcon} alt="delete-icon" />
      </div>
  );

  console.log(cartItems)
  console.log(renderCartItems)

  return(
    <div className="cart-container">
      <header>
        <h1>Your <span>Cart</span></h1>
      </header>
      <main>
        {cartItems.length > 0 ? 
          renderCartItems
          :
          'Cart is empty'
        }
      </main>
    </div>
  )
}