import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const { name, img, seller, price, stock, key } = product;

  return (
    <div className="d-flex border-bottom">
      <div className="pr-2 mt-5">
        <img src={img} alt="img" />
      </div>
      <div className="pl-2 my-5">
        <Link to="/product/">
          {" "}
          <h6 className="text-primary">{name}</h6>
        </Link>
        <p>
          <small>$ {price}</small>
        </p>
        <p>by : {seller}</p>
        <p>*Only {stock} left!</p>
        <button className=" btn btn-xs btn-warning  ">
          <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
