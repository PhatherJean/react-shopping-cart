import React, { useContext } from "react";
// context
import { CartContext } from "../context";

const Item = (props) => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);
  const handleRemove = (id) => {
    setCart(
      cart.filter((item) => {
        console.log(item);
        return id !== item.id;
      })
    );
  };
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => handleRemove(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
