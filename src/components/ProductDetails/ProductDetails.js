import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { key } = useParams();
  const singleProduct = fakeData.find(product => product.key === key);
  // const { name, price, img, seller, features, stock } = singleProduct;

  return (
    <div className="ml-5 py-5 pl-5 d-flex">
      <div className="col-md-8">
        <Product fromProductDetails={true} product={singleProduct}></Product>
      </div>
      {/* // <div className=" pr-5 py-5">
    //   <div className=" d-flex">
    //     <div className="ml-5 col-md-3  d-flex justify-content-end  ">
    //       <img src={img} alt="img" className="img-fluid" />
    //     </div>
    //     <div className=" col-md-6 border-right">
        //    <h6 className="text-primary">{name}</h6>
        //   <p>
        //     <small className="text-info">$ {price}</small>
        //   </p>

        //   {features.map(obj => { */}
      {/* //     return (
        //       <p key={obj.description}>
        //         <small>
        //           {obj.description} - {obj.value}
        //         </small>
        //       </p>
        //     );
        //   })}

        //   <p>by : {seller}</p>

        //   <p>*Only {stock} left!</p> 
        // </div> */}
      <div className="col-md-3">order</div>
    </div>
  );
};

export default ProductDetails;
