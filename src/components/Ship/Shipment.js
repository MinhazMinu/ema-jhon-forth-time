import React from "react";
import { useForm } from "react-hook-form";
import { UseAuth } from "../Login/useAuth";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const auth = UseAuth();
  const onSubmit = data => {
    //TODO : Moved this after payment
    const savedCart = getDatabaseCart();
    const orderDetails = { email: auth.user.email, cart: savedCart };

    fetch("http://localhost:4200/placeOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        alert("Successfully Placed your order with order id " + data._id);
        processOrder();
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex flex-column justify-content-center align-items-center  mt-5"
    >
      {" "}
      <div className="w-2">
        <input
          className="form-control pt-2 m-2"
          name="name"
          placeholder="Name"
          defaultValue={auth.user.name}
          ref={register({ required: true })}
        />
        {errors.name && <span className="text-danger">Name is required</span>}

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
  );
};

export default Shipment;
