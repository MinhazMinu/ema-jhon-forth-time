import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../utilities/databaseManager";
// import ProductDetails from "../ProductDetails/ProductDetails";

import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

import { Link } from "react-router-dom";
import { UseAuth } from "../Login/useAuth";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // lacal storage theke data gulu nilam. data pawa javr {56456464 : 3} erokom vabe
    const savedCart = getDatabaseCart();
    // ekhan theke shudu key guloke alada korte hobe . ejonno Object.keys.() method bebohar kora jai
    const productKeys = Object.keys(savedCart);
    //  protita key dhore fakedata theke oi product gula ber korte hobe
    // protome ProductKey theke protita key nibo map er maddome
    fetch("http://localhost:4200/getProductsByKey", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(productKeys)
    })
      .then(res => res.json())
      .then(data => {
        const whichProduct = productKeys.map(key => {
          // oi key dhore fake data theke product gula ber korte hobe
          const product = data.find(pd => pd.key === key);
          //  fakedata te quantity ani .ei qantity amra pabo local storage joma thake cart thek . tai oikhan theke kye diye value ta niya nilam
          product.quantity = savedCart[key];
          return product;
        });
        // ei new productt gulo ke cart er stae e diya dialm
        setCart(whichProduct);
      });
  }, []);

  const handleRemoveProduct = productKey => {
    const newCart = cart.filter(item => item.key !== productKey);
    removeFromDatabaseCart(productKey);
    setCart(newCart);
  };

  const auth = UseAuth();

  return (
    <div className="d-flex">
      <div className="col-md-9 border-right">
        {cart.map(item => (
          <ReviewItem
            key={item.key}
            product={item}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
        {!cart.length && (
          <h4 className="text-warning text-center">
            Your Cart Is Empty!{" "}
            <Link to="/">
              {" "}
              <br /> Click Here to Keep Shopping
            </Link>{" "}
          </h4>
        )}
      </div>
      <div className="col-md-3">
        <Cart cart={cart}>
          <Link to="/shipment">
            {auth.user ? (
              <button
                className="btn btn-warning font-weight-bold"
                // onClick={handlePlaceOrder}
              >
                Proceed Checkout
              </button>
            ) : (
              <button className="btn btn-warning font-weight-bold">
                Login to Proceed
              </button>
            )}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
