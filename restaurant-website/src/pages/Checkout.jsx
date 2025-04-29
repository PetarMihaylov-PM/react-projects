
export default function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-left">

      </div>
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
    </div>
  )
}