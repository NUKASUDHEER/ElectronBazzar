import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../components/styles/OrderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess" style={{marginTop:'5%'}}>
      <CheckCircleIcon />

      <Typography style={{color: "black"}}>Your Order has been Placed successfully </Typography>
      <Link to="/orders" style={{fontSize:'1.3rem'}}>View Orders</Link>
    </div>
  );
};

export default OrderSuccess;