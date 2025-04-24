import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { menuItems } from "../assets/menu";
import { useState } from "react";

export default function Layout(){

  const [searchedItems, setSearchedItems] = useState('');
  const [cartItems, setCartItems] = useState([]);


  const filtered = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchedItems.toLocaleLowerCase())
  )

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i=> 
          i.name === item.name ? {...i, quantity: i.quantity + 1} : 1
        );
      } else {
        return [...prev, {...item, quantity: 1}];
      }
    });
  };

  const updateQuantity = (itemName, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.name === itemName ? {...item, quantity: newQuantity} : item
      )
    );
  };

  return(
    <>
    <div className="main-container">
      <Navbar onSearch={setSearchedItems}/>
      <main>
        <Outlet 
          context={{ 
            filtered, 
            cartItems,
            addToCart,
            updateQuantity  
            }} />
      </main>
      <Footer />
    </div>
    </>
  )
}