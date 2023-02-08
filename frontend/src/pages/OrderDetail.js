import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../store/actions/order-actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const { loading, order } = useSelector((state) => state.getOrder);

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  console.log(order);
  return (
    <>
      {loading ? (
        <p style={{ color: "black" }}> Loading</p>
      ) : (
        <>
          <div
            style={{
              height: "100vh",
              width: "90vw",
              margin: "0 auto",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "white",
            }}
          >
            <h1
              style={{
                color: "black",
                marginTop: "8%",
                marginLeft: "40px",
                marginBottom: "4%",
              }}
            >
              <Link style={{color:'black'}} to="/orders">OrderItems</Link>
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "1%",
                borderRadius: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                backgroundColor: "white",
              }}
            >
              <h6
                style={{
                  flexBasis: "1",
                  flexGrow: "1",
                  textAlign: "center",
                  padding: "0.25em",
                  fontWeight: "bold",
                }}
              >
                Name
              </h6>
              <h6
                style={{
                  width: "40%",
                  textAlign: "center",
                  padding: "0.25em",
                  fontWeight: "bold",
                }}
              >
                Quantity
              </h6>
              <h6
                style={{
                  width: "30%",
                  textAlign: "center",
                  padding: "0.35em",
                  fontWeight: "bold",
                }}
              >
                Total price
              </h6>
            </div>
            {order.orderItems.map((o) => (
              <div
                style={{
                  //   border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "1%",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "white",
                }}
              >
                <h6
                  style={{
                    flexBasis: "1",
                    flexGrow: "1",
                    // border: "1px solid black",
                    textAlign: "center",
                    padding: "0.35em",
                  }}
                >
                  {o.name}
                </h6>
                <h6
                  style={{
                    width: "40%",
                    // border: "1px solid black",
                    textAlign: "center",
                    padding: "0.35em",
                  }}
                >
                  {o.quantity}
                </h6>
                <h6
                  style={{
                    width: "30%",
                    // border: "1px solid black",
                    textAlign: "center",
                    padding: "0.35em",
                  }}
                >
                  {o.price * o.quantity}
                </h6>
              </div>
            ))}

            <div>
              <h4
                style={{
                  marginLeft: "75%",
                  color: `${order.orderStatus === "delivered"} ?'green':'red'`,
                }}
              >
                Order status : {order.orderStatus}
              </h4>
              <h4 style={{ marginLeft: "75%" }}>
                Order total : {order.totalPrice} Rs.
              </h4>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderDetail;
