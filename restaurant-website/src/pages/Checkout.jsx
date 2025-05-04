import React, {useState} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';
import creditCard from '../assets/credit-card.png'


export default function Checkout() {

  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isCashChecked, setIsCashChecked] = useState(false);
  let { totalPrice } = useOutletContext();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/cart');
  }

  totalPrice = Number(totalPrice);
  const shippingPrice = totalPrice * 0.15;
  const orderTax = totalPrice * 0.2;
  const buffer = totalPrice + shippingPrice + orderTax;
  const totalOrderPrice = Math.round((buffer + Number.EPSILON) * 100) / 100;

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h1>Checkout</h1>
        <h3>Ship To</h3>

        <div className="name-input-container">
          <div className="first-name-container">
            <h4>First Name <span>required</span></h4>
            <input type="text" />
          </div>

          <div className="last-name-container">
            <h4>Last Name <span>required</span></h4>
            <input type="text" />
          </div>
        </div>

        <div className="street-address-container">
          <h4>Street Address <span>required</span></h4>
          <input type="text" />
        </div>

        <div className="city-input-container">
          <div>
            <h4>Postal Code <span>required</span></h4>
            <input type="number" />
          </div>
          <div>
            <h4>Town/City <span>required</span></h4>
            <input type="text" />
          </div>
        </div>

        <div className="phone-number-container">
          <h4>Phone Number <span>required</span></h4>
          <input type="number" placeholder=" +359 ..."/>
        </div>

        <div className="payment-type-container">
          <h4>Payment Type <span>required</span></h4>
          <div className="payment-type-radio-btns">
            <div>
              <input 
                onChange={() => {
                  setIsCardChecked(false)
                  setIsCashChecked(true)
                }}
                type="radio"
                id='cash'
                name="payment-type"
              />
              <label htmlFor="cash">Cash <span>on arrival</span></label>
            </div>
            <div>
              <input 
                onChange={() => {
                  setIsCardChecked(true)
                  setIsCashChecked(false)
                }}
                type="radio"
                id='card' 
                name="payment-type"
              />
              <label htmlFor="card">Card</label>
            </div>
          </div>

          {isCardChecked ? 
            <div className="card-payment-container">
              <img src={creditCard} alt="credit-card-img" />
              <input type="text" placeholder=" CARD NUMBER"/>
              <input type="text" placeholder=" CARDHOLDER NAME"/>
              <div className="card-info">
                <input type="text" placeholder=" MM"/>
                <input type="text" placeholder=" YY"/>
                <input type="text" placeholder=" CVV"/>
              </div>
              <div className="card-buttons">
                <button className="pay-btn">PAY NOW</button>
                <button className="cancel-btn">CANCEL</button>
              </div>
            </div>
          : 
            isCashChecked ? 
              <div className='place-order-btns-container'>
                <button>Place order</button>
              </div>
            :
            null
            }
        </div>
      </div>
      <div className="checkout-right">
        <div className='header-order-summary'>
          <h3>Order Summary</h3>
          <a onClick={handleNavigate}>Edit cart</a>
        </div>
        <div className='order-items'>
          <h4>Items:</h4>
          <h4>${totalPrice.toFixed(2)}</h4>
        </div>
        <div className='order-shippin'>
          <h4>Shipping & Handling:</h4>
          <h4>${shippingPrice.toFixed(2)}</h4>
        </div>  
        <div className='order-tax'>
          <h4>Tax:</h4>
          <h4>${orderTax.toFixed(2)}</h4>
        </div>
        <div className='order-total-price'>
          <h3>Total price:</h3>
          <h3>${totalOrderPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  )
}