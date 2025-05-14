import React, {useState , useEffect} from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import deleteIcon from '../assets/delete-icon.png'
import minusIcon from '../assets/minus-icon.svg'
import plusIcon from '../assets/plus-icon.svg'

export default function Cart() {

  const { cartItems, updateQuantity, removeItemFromCart, totalPrice } = useOutletContext();

  const navigate = useNavigate();

  function handleClick() {
    navigate('/checkout');
  }

  const renderCartItems = cartItems.map(item => 
      <div 
      key={item.id}
      className="cart-item-card">
        <div className="img-container">
          <img 
          className="food-img"
          src={item.image} 
          alt="food pic" />
        </div>
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
            onClick={() => 
              updateQuantity(item.name, Math.max(1, item.quantity - 1))
            }
          >
            <img src={minusIcon}/>
          </button>
          <h3>{item.quantity}</h3>

          <button
            onClick={() => 
              updateQuantity(item.name, Math.min(10, item.quantity + 1))
            }
          >
            <img src={plusIcon}/>
          </button>
        </div>
        <img 
          className="delete-icon"
          onClick={() => removeItemFromCart(item.id)}
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
          <h1 className="empty-cart"><span>is</span> empty</h1>
        }
        {cartItems.length > 0 ? 
          <div className="total-price-section">
            <h1>Total price: <span>$ {totalPrice}</span></h1>
            <button 
              className="checkout-button"
              onClick={handleClick}
            >
              Checkout
            </button>
          </div> 
          :
          null}
      </main>
    </div>
  )
}