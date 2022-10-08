import React, { useState, useEffect } from "react";
const Cart = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(
      cartItems.reduce(
        (acc, current) => (acc + Number(current[0].price)) * current.qty,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className="cart">
      <h1>Total price:Rs {price}</h1>
      {cartItems.length === 0 ? (
        "Cart is empty"
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-items" key={item[0].id}>
              {/* <button onClick={() => item.qty + 1}>+</button> */}
              <img src={item[0].image} alt="prod" />
              <div>{item[0].title}</div>
              {/* <div>{item.qty}</div> */}
              {/* <button>-</button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
