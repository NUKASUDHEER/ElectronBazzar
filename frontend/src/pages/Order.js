import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myOrders } from "../store/actions/order-actions";
import "../components/styles/Order.css";
import { Link } from "react-router-dom";
const Order = () => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector((state) => state.myOrder);

  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ marginTop: "6%", textAlign: "center", marginBottom: "2%" }}>
        Your Orders
      </h1>
      {loading ? (
        <p style={{ color: "black" }}>Loading...</p>
      ) : (
        <div>
          {orders.map((order) => (
            <Link
              to={`/order/${order._id}`}
              key={order._id}
              style={{
                color: "black",
                // border: "1px solid black",
                borderRadius: "10px",
                margin: "1%",
                textAlign: "center",
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
              }}
              className="link"
            >
              Order Id : {order._id}{" "}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Order;
