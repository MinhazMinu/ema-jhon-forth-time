import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart, fromProductDetails }) => {
  const { name, img, seller, price, stock, key, features } = product;

  return (
    <div className="d-flex border-bottom">
      <div className="pr-2 mt-5">
        <img src={img} alt="img" />
      </div>
      <div className="pl-2 my-5">
        {" "}
        <h6 className="text-primary">
          <Link to={`/product/${key}`}>{name}</Link>
        </h6>
        <p>
          <small>$ {price}</small>
        </p>
        <p>by : {seller}</p>
        <p>*Only {stock} left!</p>
        {fromProductDetails ? (
          features.map(obj => {
            return (
              <em key={obj.description}>
                {obj.description} - {obj.value} <br />
              </em>
            );
          })
        ) : (
          <button
            className=" btn btn-xs btn-warning "
            onClick={() => handleAddToCart(product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
