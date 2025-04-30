
export default function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-right">
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
      </div>
      <div className="checkout-left">
        <div className="checkout-left-header">
          <h3>Order Summary</h3>
          <link rel="stylesheet" href=""/> Edit cart
        </div>
      </div>
    </div>
  )
}