import React, { Fragment, useRef } from "react";
import CheckoutSteps from "../components/layout/CheckouSteps";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

import "../components/styles/Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder } from "../store/actions/order-actions";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // console.log(shippingInfo);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
    paymentInfo:{
      id:'samplePayment',
      status:'succeded'
    }
  };

  const submitHandler = async (e) => {
    
    dispatch(createOrder(order));

    navigate("/success");
  };



  return (
    <Fragment>
    <div style={{marginTop:"5%", font: 'Poppins'}}><CheckoutSteps activeStep={2}/></div>
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <input type = "number" />
          </div>
          <div>
            <EventIcon />
            <input type = "number" />
          </div>
          <div>
            <VpnKeyIcon />
            <input type = "number" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
