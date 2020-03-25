import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  addToDatabaseCart,
  getDatabaseCart
} from "../../utilities/databaseManager";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const first10 = fakeData.slice(0, 10);
    setProducts(first10);

    const savedCart = getDatabaseCart();

    const key = Object.keys(savedCart);
    console.log(key);
    const cartProduct = key.map(pd => {
      const product = fakeData.find(allProduct => allProduct.key == pd);
      product.quantity = savedCart[pd];
      return product;
    });
    setCart(cartProduct);
  }, []);
  const handleAddToCart = product => {
    const sameProduct = cart.find(
      sameProductKey => sameProductKey.key === product.key
    );

    let newCart;
    if (sameProduct) {
      sameProduct.quantity += 1;

      const OtherProducts = cart.filter(
        allCartProduct => allCartProduct.key !== product.key.key
      );
      newCart = [...OtherProducts, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    const count = newCart.filter(item => item.key === product.key);
    setCart(newCart);
    addToDatabaseCart(product.key, count.length);
  };

  return (
    <div className="row">
      <div className=" col-md-8 border-right py-4 ml-5 pl-5">
        {products.map(product => {
          return (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
              fromProductDetails={false}
            ></Product>
          );
        })}
      </div>
      <div className=" col-md-3 py-4 ">
        <div className="mx-auto">
          <Cart cart={cart}>
            <Link to={"/review"}>
              <button className=" btn btn-xl btn-warning ">
                <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Review Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
