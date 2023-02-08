import React, { useState} from "react";
import classes from "../components/styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import CartItem from "../components/layout/CartItem";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import {useNavigate} from 'react-router-dom'

function Cart() {

  const navigate = useNavigate();

  const [state, setState] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    grandTotal: 0,
  });

  const valueHandler = (value) => {
    setState(...state, {
      subtotal: state.subtotal + value,
      tax: state.subtotal * 0.05,
      shipping: 150,
      grandTotal: state.subtotal + state.tax,
    });
  };


  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = cartItems.reduce((r, i) => i.price * i.quantity + r, 0);


  const checkoutHandler = () => {
    navigate("/login?redirect=shipping")
  }


  return (
    <>
      <Navbar />

      <section className={classes.cart} onChange={valueHandler}>
        <div className={classes.heading}>Cart</div>

        <div className={classes["cart-body"]}>
          <div className={classes["cart-body-attribute"]}>
            Subtotal
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              {subTotal}
            </div>
          </div>
          <div className={classes["cart-body-attribute"]}>
            Tax(5%)
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              500
            </div>
          </div>
          <div className={classes["cart-body-attribute"]}>
            Shipping
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              150
            </div>
          </div>
          <div className={classes["cart-body-attribute"]}>
            Grand Total
            <div>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              2150
            </div>
          </div>
          <div className={classes["checkout"]}>
            <Button variant="dark" onClick={checkoutHandler} {...cartItems ?'disabled': ''}>Checkout</Button>
          </div>
        </div>

        <div className={classes["items-list"]}>
          {cartItems && cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} product={cartItem} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Cart;
