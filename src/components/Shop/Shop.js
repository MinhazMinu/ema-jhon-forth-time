import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const first10 = fakeData.slice(0, 10);
    setProducts(first10);
  }, []);
  const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart);
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
            ></Product>
          );
        })}
      </div>
      <div className=" col-md-3 py-4 ">
        <div className="mx-auto">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
