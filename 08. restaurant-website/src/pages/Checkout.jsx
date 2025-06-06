import React, {useState} from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';
import creditCard from '../assets/credit-card.png'


export default function Checkout() {

  const [isCardChecked, setIsCardChecked] = useState(false);
  const [isCashChecked, setIsCashChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    phoneNumber: '',
    paymentType: '',
    cardNumber: '',
    cardName: '',
    mm: '',
    yy: '',
    cvv: ''
  });

  let { totalPrice, setCartItems } = useOutletContext();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/cart');
  }

  function handleChange (e) {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  function handlePlaceOrder() {
    const newErrors = {};

    // creating the required fields array
    const requiredFields = [
      'firstName',
      'lastName',
      'address',
      'postalCode',
      'city',
      'phoneNumber',
    ]
  
    // adding required fields if payment type is CARD
    if (isCardChecked) {
      requiredFields.push('cardNumber', 'cardName', 'mm', 'yy', 'cvv');
    }

    // checking to if there are empty fields
    const emptyFields = requiredFields.filter(field => {
      if(!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'This field is required';
      }
    });

    // Card input validation
    if (isCardChecked) {
      if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = 'Card number must be 16 digits.';
      }
      if (!/^\d{2}$/.test(formData.mm) || +formData.mm < 1 || +formData.mm > 12) {
        newErrors.mm = 'Invalid month';
      }
      if (!/^\d{2}$/.test(formData.yy)) {
        newErrors.yy = 'Invalid year';
      }
      if (!/^\d{3}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3 digits';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    // placing order if all fields are filled.
    else {
      const order = {
        ...formData,
        total: totalOrderPrice.toFixed(2),
        paymentMethod: isCardChecked ? 'Card' : 'Cash'
      };
  
      console.log('Your order has been sent to the server:' , order);
      alert('Your order has been placed!');
      setCartItems([]);
      navigate('/');
    }
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
            <input 
              type="text" 
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? 'input-error' : ''}
            />
          </div>

          <div className="last-name-container">
            <h4>Last Name <span>required</span></h4>
            <input 
              type="text" 
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? 'input-error' : ''}
            />
          </div>
        </div>

        <div className="street-address-container">
          <h4>Street Address <span>required</span></h4>
          <input 
            type="text" 
            name='address'
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'input-error' : ''}
          />
        </div>

        <div className="city-input-container">
          <div>
            <h4>Postal Code <span>required</span></h4>
            <input 
              type="number" 
              name='postalCode'
              value={formData.postalCode}
              onChange={handleChange}
              className={errors.postalCode ? 'input-error' : ''}
            />
          </div>
          <div>
            <h4>Town/City <span>required</span></h4>
            <input 
              type="text" 
              name='city'
              value={formData.city}
              onChange={handleChange}
              className={errors.city ? 'input-error' : ''}
            />
          </div>
        </div>

        <div className="phone-number-container">
          <h4>Phone Number <span>required</span></h4>
          <input 
            type="number"
            placeholder=" +359 ..."
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'input-error' : ''}
          />
        </div>

        <div className="payment-type-container">
          <h4>Payment Type <span>required</span></h4>
          <div className="payment-type-radio-btns">
            <div>
              <input 
                onChange={() => {
                  setIsCardChecked(false)
                  setIsCashChecked(true)
                  handleChange
                }}
                type="radio"
                id='cash'
                name="paymentType"
                value={formData.paymentType}
              />
              <label htmlFor="cash">Cash <span>on arrival</span></label>
            </div>
            <div>
              <input 
                onChange={() => {
                  setIsCardChecked(true)
                  setIsCashChecked(false)
                  handleChange
                }}
                type="radio"
                id='card' 
                name="paymentType"
                value={formData.paymentType}
              />
              <label htmlFor="card">Card</label>
            </div>
          </div>

          {isCardChecked ? 
            <div className="card-payment-container">
              <img src={creditCard} alt="credit-card-img" />
              <input 
                type="text" 
                placeholder=" CARD NUMBER" 
                name='cardNumber'
                onChange={handleChange}
                className={errors.cardNumber ? 'input-error' : ''}
              />
              <input 
                type="text" 
                placeholder=" CARDHOLDER NAME"
                name='cardName'
                onChange={handleChange}
                className={errors.cardName ? 'input-error' : ''}
              />
              <div className="card-info">
                <input 
                  type="text" 
                  placeholder=" MM"
                  name='mm'
                  onChange={handleChange}
                  className={errors.mm ? 'input-error' : ''}
                />
                <input 
                  type="text" 
                  placeholder=" YY"
                  name='yy'
                  onChange={handleChange}
                  className={errors.yy ? 'input-error' : ''}
                />
                <input 
                  type="text" 
                  placeholder=" CVV"
                  name='cvv'
                  onChange={handleChange}
                  className={errors.cvv ? 'input-error' : ''}
                />
              </div>
              <div className="card-buttons">
                <button 
                  className="pay-btn"
                  onClick={handlePlaceOrder}
                >
                  PAY NOW
                </button>
                <button 
                  className="cancel-btn"
                  onClick={handleNavigate}
                >
                  CANCEL
                </button>
              </div>
            </div>
          : 
            isCashChecked ? 
              <div className='place-order-btns-container'>
                <button
                  onClick={handlePlaceOrder}
                > 
                  Place order
                </button>
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