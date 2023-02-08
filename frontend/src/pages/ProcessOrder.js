import React, { useState } from "react";
import "../components/styles/table.css";
import "../components/styles/processOrder.css";
import { useDispatch } from "react-redux";
import { updateOrder } from "../store/actions/order-actions";
const ProcessOrder = (props) => {
  // console.log(props);
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')

  console.log(status);

  const onProcessHandler = () => {
    dispatch(updateOrder(props.order.id, {
      status
    }))
    window.location.reload()
  }

  return (
    <>
      <div className="processOrderMainContainer">
        <div className="processingDetails">
          <h3>Shipping Info</h3>
          <div className="details">
            <p>Phone: {props.order.phone}</p>
            <p>Address: {props.order.address}</p>
          </div>
          <h3>Payment</h3>
          <div className="details">
            <h5 style={{ color: "green" }}>PAID</h5>
            <p>Amount: {props.order.totalPrice}</p>
          </div>
          <h3>Order Status</h3>
          <div className="details">
            <p style={{ color: "red" }}>{props.order.orderStatus}</p>
          </div>
          <h3>Your Cart Items</h3>
          {props.order.orderItems.map((item) =>           <div className="details">
            <p>
              {item.name}(x{item.quantity})
            </p>
          </div>)}

        </div>
        <div className="splitTwoDivsLine"></div>
        <div className="processOrderDelivered">
          <div style={{marginLeft:-20}} className="heading">
            <h1>
              <h4>PROCESS ORDER</h4>
            </h1>
          </div>
          <div>
            <div className="userDivInput">
              <select className="selectOption" onChange={(e) => setStatus(e.target.value)}>
                <option value="None">Select</option>
                <option value="Delivered">Delivered</option>
                <option value="Shipped">Shipped</option>
              </select>
            </div>
            <button type="" className="createButton" onClick={onProcessHandler}>
              Process
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessOrder;
