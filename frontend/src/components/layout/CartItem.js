import React from "react";
import classes from "../styles/Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  removeCompleteCartItem,
} from "../../store/actions/cart-actions";

function CartItem({ product }) {

  const dispatch = useDispatch();

  const increaseQuantity = (id, quantity) => {
    const newQty = quantity + 1;
    console.log(newQty);
    dispatch(addItem(id, 1));
  };

  const decreaseQuantity = (id) => {
    dispatch(removeItem(id));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeCompleteCartItem(id));
  };

  return (
    <div className={classes.card}>
      <div className={`${classes["image"]}`}>
        <img src="./images/realme Band 2.png" alt="..." />
      </div>
      <div className={`${classes["name"]}`}>{product.name}</div>
      <div className={`${classes["price"]}`}>
        <div>
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          {product.price}
        </div>
      </div>
      <div className={`${classes["quantity"]}`}>
        <div className={classes["quantity-input"]}>
          <FontAwesomeIcon
            icon={faMinus}
            className={classes.Icon}
            onClick={() => decreaseQuantity(product.id)}
          />
          <input readOnly type="text" value={product.quantity} />
          <FontAwesomeIcon
            icon={faPlus}
            className={classes.Icon}
            onClick={() => increaseQuantity(product.id, product.quantity)}
          />
        </div>
      </div>
      <div className={`${classes["remove"]}`}>
        <Button
          variant="outline-danger"
          className={classes.black}
          onClick={() => removeItemFromCart(product.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
