import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { key } = useParams();
  return <div>{key} in dis productt</div>;
};

export default ProductDetails;
