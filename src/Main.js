import Card from "./Card";
const Main = ({ data, addCart, removeCart, cartItems }) => {
  return (
    <div className="main-container">
      {data.map((item) => (
        <Card
          item={item}
          key={item.id}
          addCart={addCart}
          removeCart={removeCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};
export default Main;
