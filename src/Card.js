const Card = ({ item, addCart, removeCart, cartItems }) => {
  return (
    <div className="card">
      <img src={item.image} alt="product" className="image" />
      <h3>{item.title}</h3>
      <p>Price:{item.price}</p>
      {cartItems.some((el) => el[0].id === item.id) ? (
        <button className="removebtn" onClick={() => removeCart(item.id)}>
          Remove from Cart
        </button>
      ) : (
        <button className="addbtn" onClick={() => addCart(item.id)}>
          Add to Cart
        </button>
      )}{" "}
    </div>
  );
};
export default Card;
