import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { menuItems } from "../assets/menu";
import { useState, useEffect, useRef } from "react";

export default function Layout(){

  const [searchedItems, setSearchedItems] = useState('');
  const [cartItems, setCartItems] = useState(() => {

    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : []
  });

  const [itemAddedId, setItemAddedId] = useState(null);
  const timeOutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const filtered = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchedItems.toLocaleLowerCase())
  )

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i=> 
          i.name === item.name ? {...i, quantity: i.quantity + 1} : i
        );
      } else {
        return [...prev, {...item, quantity: 1}];
      }
    });

    setItemAddedId(item.id);

    if(timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      setItemAddedId(null);
    }, 2000);
  };

  const updateQuantity = (itemName, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.name === itemName ? {...item, quantity: newQuantity} : item
      )
    );
  };

  const removeItemFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
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
            addToCart,
            updateQuantity,
            removeItemFromCart,
            itemAddedId
            }} />
      </main>
      <Footer />
    </div>
    </>
  )
}