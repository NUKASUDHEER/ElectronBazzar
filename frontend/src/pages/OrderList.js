import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders } from "../store/actions/order-actions";
import { useAlert } from "react-alert";
import ProcessOrder from "./ProcessOrder";

import "../components/styles/table.css";

const AdminOrders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, orders } = useSelector((state) => state.allOrders);
  const [process, setProcess] = useState(false)
  const [order, setOrder] = useState({
    id:'',
    phone:'',
    address:'',
    totalPrice: '',
    paymentStatus: '',
    orderStatus: '',
    orderItems: []
  })


  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    dispatch(getAllOrders());
  }, [dispatch, alert, error]);


  const onProcessHandler = (Order) => {
    setOrder({
      ...order,
      id: Order._id,
      phone: Order.shippingInfo.phoneNo,
      address: Order.shippingInfo.address,
      paymentStatus: Order.paymentInfo.status,
      orderStatus: Order.orderStatus,
      orderItems: Order.orderItems,
      totalPrice: Order.totalPrice
    })
    setProcess(true)
  }

  const onDeleteHandler = (id) => {
    dispatch(deleteOrder(id))
    window.location.reload()
  }


  // console.log(order.orderItems);


  return (
    <>
    {process ? <ProcessOrder order = {order}/>:(
      <div>
      <div className="heading">
        <h1>Orders</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Items Qty</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </tbody>
        <tbody>
          {orders.length === 0 ? (
            <p>Loading...</p>
          ) : (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderStatus}</td>
                <td>{order.orderItems.length}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <span className="tableicon">
                      <FontAwesomeIcon icon={faPen} onClick = {onProcessHandler.bind(null, order)}/>
                  </span>
                  <span className="tableicon">
                    <FontAwesomeIcon icon={faTrash} onClick= {onDeleteHandler.bind(null, order._id)}/>
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    )}
    </>
  );
};

export default AdminOrders;
