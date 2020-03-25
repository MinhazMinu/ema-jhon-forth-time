import React from "react";
import { text, parse } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart }) => {
  // console.log(cart);
  const totalPrice = cart.reduce((sum, i) => {
    return (sum += i.price);
  }, 0);

  let shipping = 0;
  if (totalPrice >= 150 && totalPrice < 250) {
    shipping = 4.99;
  } else if (totalPrice > 0 && totalPrice < 150) {
    shipping = 12.99;
  }
  const tex = (totalPrice * 0.15).toFixed(2);
  const grandTotal = totalPrice + shipping + parseFloat(tex);

  return (
    <div className="text-center pt-5 pb-2">
      <h4 className="border-bottom text-info">Order Summery</h4>
      <h6>Product Price : {totalPrice.toFixed(2)} </h6>
      <h6>Order Item : {cart.length} </h6>
      <h6>Shipping : {shipping}</h6>
      <h6>Tex + Vat : {tex} </h6>
      <h5 className="border-top text-info pt-1">
        Total : {grandTotal.toFixed(2)}{" "}
      </h5>
      <Link to={"/review"}>
        <button className=" btn btn-xs btn-warning ">
          <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Review Order
        </button>
      </Link>
    </div>
  );
};

export default Cart;
