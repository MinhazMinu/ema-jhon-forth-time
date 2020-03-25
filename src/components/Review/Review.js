import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../utilities/databaseManager";
import ProductDetails from "../ProductDetails/ProductDetails";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // lacal storage theke data gulu nilam. data pawa javr {56456464 : 3} erokom vabe
    const savedCart = getDatabaseCart();
    // ekhan theke shudu key guloke alada korte hobe . ejonno Object.keys.() method bebohar kora jai
    const productKyes = Object.keys(savedCart);
    //  protita key dhore fakedata theke oi product gula ber korte hobe
    // protome ProductKey theke protita key nibo map er maddome
    const whichProduct = productKyes.map(key => {
      // oi key dhore fake data theke product gula ber korte hobe
      const product = fakeData.find(pd => pd.key === key);
      //  fakedata te quantity ani .ei qantity amra pabo local storage joma thake cart thek . tai oikhan theke kye diye value ta niya nilam
      product.quantity = savedCart[key];
      return product;
    });
    // ei new productt gulo ke cart er stae e diya dialm
    setCart(whichProduct);
  }, []);

  const handleRemoveProduct = productKey => {
    const newCart = cart.filter(item => item.key !== productKey);
    removeFromDatabaseCart(productKey);
    setCart(newCart);
  };

  return (
    <div>
      <h1>Cart Item : {cart.length}</h1>
      {cart.map(item => (
        <ReviewItem
          key={item.key}
          product={item}
          handleRemoveProduct={handleRemoveProduct}
        ></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
