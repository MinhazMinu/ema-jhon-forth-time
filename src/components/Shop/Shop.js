import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const first10 = fakeData.slice(0, 10);

    setProducts(first10);
  }, []);

  return (
    <div className="row">
      <div className=" offset-md-1 col-md-8 border-right py-4">
        {products.map(product => {
          return <Product key={product.key} product={product}></Product>;
        })}
      </div>
      <div className=" col-md-2 py-4">sdsd</div>
    </div>
  );
};

export default Shop;
