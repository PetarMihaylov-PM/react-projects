import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { menuItems } from "../assets/menu";
import { useState, useEffect, useRef } from "react";

export default function Layout(){

  const [searchedItems, setSearchedItems] = useState('');
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(() => {

    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : []
  });

  const [itemAddedId, setItemAddedId] = useState(null);
  const timeOutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItemsQuantity(countCartItems);
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

  const countCartItems = () => {
    const quantity = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return quantity;
  }

  return(
    <>
    <div className="main-container">
      <Navbar onSearch={setSearchedItems} cartItemsQuantity={cartItemsQuantity}/>
      <main>
        <Outlet 
          context={{ 
            filtered, 
            cartItems,
            addToCart,
            updateQuantity,
            removeItemFromCart,
            itemAddedId,
            cartItemsQuantity
            }} />
      </main>
      <Footer />
    </div>
    </>
  )
}