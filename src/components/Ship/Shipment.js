import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UseAuth } from "../Login/useAuth";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckOutForm/CheckOutForm";

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const [shipInfoAdded, setShipInfoAdded] = useState(null);
  const stripePromise = loadStripe(
    "pk_test_JNFbMIc1RcL6EyosU4vkgjep00hLE5jnGF"
  );
  const auth = UseAuth();
  const onSubmit = data => {
    //TODO : Moved this after payment
    const savedCart = getDatabaseCart();
    const orderDetails = {
      email: auth.user.email,
      cart: savedCart,
      shipment: data
    };

    fetch("http://localhost:4200/placeOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(order => {
        setShipInfoAdded(true);
        // alert("Successfully Placed your order with order id " + order._id);
        // processOrder();
      });
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div
          className="col-md-6 border-right  "
          style={{ display: shipInfoAdded && "none" }}
        >
          <h4 className="text-center ">Shipping Information</h4>{" "}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column justify-content-center align-items-center  mt-5"
          >
            <div className="w-2">
              <input
                className="form-control pt-2 m-2"
                name="name"
                placeholder="Name"
                defaultValue={auth.user.name}
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Name is required</span>
              )}

              <input
                className="form-control pt-2 m-2"
                name="address"
                placeholder="address"
                ref={register({ required: true })}
              />
              {errors.address && (
                <span className="text-danger">Address is required</span>
              )}

              <input
                className="form-control pt-2 m-2"
                name="email"
                placeholder="email"
                defaultValue={auth.user.email}
                ref={register({ required: true })}
              />

              {errors.email && (
                <span className="text-danger">Email field is required</span>
              )}
              <input
                className="form-control pt-2 m-2"
                name="city"
                placeholder="city"
                ref={register({ required: true })}
              />

              {errors.city && (
                <span className="text-danger">City field is required</span>
              )}
              <input
                className="form-control pt-2 m-2"
                name="country"
                placeholder="country"
                ref={register({ required: true })}
              />

              {errors.country && (
                <span className="text-danger">Country field is required</span>
              )}
              <input
                className="form-control pt-2 m-2"
                name="zip"
                placeholder="zipCode"
                ref={register({ required: true })}
              />

              {errors.zip && (
                <span className="text-danger">ZipCode field is required</span>
              )}

              <input
                className="form-control pt-2 m-2 btn btn-xs btn-warning rounded "
                type="submit"
              />
            </div>
          </form>
        </div>
        <div
          className="col-md-6"
          style={{ display: shipInfoAdded ? "block" : "none" }}
        >
          <h4 className="mb-4">Payment Information</h4>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
