import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import Cart from "./Cart";
export default function App() {
  const [result, setResult] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const fetchData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setResult(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(cartItems, "res");
  const addToCart = (id) => {
    let items = result.filter((item) => item.id === id);
    items.qty = 1;
    setCartItems((prevItems) => [...prevItems, items]);
  };
  const removeFromCart = (id) => {
    //console.log(cartItems, "id");
    let removeitems = cartItems.filter((item) => item[0].id !== id);
    console.log(removeitems, "item");
    setCartItems(removeitems);
  };
  return (
    <div className="App">
      <Main
        data={result}
        addCart={addToCart}
        removeCart={removeFromCart}
        cartItems={cartItems}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}
