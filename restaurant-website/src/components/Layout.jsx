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
    setCartItems(prev => [...prev, item]);
  }

  return(
    <>
    <div className="main-container">
      <Navbar onSearch={setSearchedItems}/>
      <main>
        <Outlet 
          context={{ 
            filtered, 
            cartItems,
            addToCart  
            }} />
      </main>
      <Footer />
    </div>
    </>
  )
}