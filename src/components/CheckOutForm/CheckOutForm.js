import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = props => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentFinished, setPaymentFinished] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentFinished(null);
    } else {
      setPaymentFinished(paymentMethod);
      const payment = { id: paymentMethod.id, last4: paymentMethod.card.last4 };
      props.handlePlaceOrder(payment);
      setPaymentError(null);
    }
    console.log("stripe => ", error, paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && (
        <div>
          <p className="text-danger">{paymentError}</p>
        </div>
      )}
      {paymentFinished && <p className="text-success">Payment Successful!</p>}
    </form>
  );
};

export default CheckoutForm;
