import React, {useState} from "react";

function Cart() {
  return(
    <div className="cart-container">
      <header>
        <h1>Your <span>Cart</span></h1>
      </header>
      <main>
        <div>
          <img src="" alt="food pic" />
          <h3>name</h3>
          <h3>price: $ 10</h3>
          <input type="number" />
          <img src="" alt="delete-icon" />
        </div>
      </main>
    </div>
  )
}