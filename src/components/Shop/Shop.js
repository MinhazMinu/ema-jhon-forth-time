import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const first10 = fakeData.slice(0, 10);

    setProducts(first10);
  }, []);

  return (
    <div className="row">
      <div className="col-md-9 ml-5 p-5 border-right">
          {
              products.map(product => {
                    
              })
          }
      </div>
      <div className="col-md-2">sdsd</div>
    </div>
  );
};

export default Shop;
