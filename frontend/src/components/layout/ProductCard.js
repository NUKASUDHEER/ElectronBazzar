import React from "react";
import classes from '../styles/ProductCard.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.offer}>
      <FontAwesomeIcon icon={faIndianRupeeSign} className={classes.black}   style={{fontSize: '0.8rem',margin: '0 auto',color: '#efefef'}} />{" "}
        500 Off
      </div>
      <img src="/images/realme Watch 2.png" className={classes["card-img-top"]} alt="..." />
      <div className={classes["card-body"]}>
        <p className={classes["card-text"]}>
          <strong>{ props.name}</strong>
        </p>
        <p className={classes["card-text"]}>
          <b>Price ,</b>
          <FontAwesomeIcon style={{fontSize: '1rem',margin: '0 auto' }}icon={faIndianRupeeSign} className={classes.black} />{" "}
          <b>{props.price}</b>
        </p>
      </div>
    </div>
  );
};

export default Product;
