import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemoveFormat, faTrash } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, img, quantity, key } = product;
  return (
    <div className="text-primary border-bottom mx-5 py-5 pl-5">
      <h4> {name} </h4>
      <p> Quantity : {quantity} </p>
      <br />
      <button
        className="btn btn-xs btn-warning"
        onClick={() => handleRemoveProduct(key)}
      >
        <FontAwesomeIcon icon={faTrash} /> Remove
      </button>
    </div>
  );
};

export default ReviewItem;
