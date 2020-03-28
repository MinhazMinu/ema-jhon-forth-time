import React from "react";
import { useForm } from "react-hook-form";
import { UseAuth } from "../Login/useAuth";

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const auth = UseAuth();
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
