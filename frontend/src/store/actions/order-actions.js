import {
  getOrderActions,
  OrderActions,
  myOrderActions,
  deleteOrderActions,
  allOrderActions,
  updateOrderActions,
} from "../index";

const token = localStorage.getItem("token");
// Create Order
export const createOrder = (order) => async (dispatch) => {
  dispatch(OrderActions.createOrderRequest());
  console.log(order);
  const response = await fetch("http://localhost:4000/api/v1/order/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  console.log(data);
  if (data.success) dispatch(OrderActions.createOrderSuccess(data.order));
  else dispatch(OrderActions.createOrderFail(data.message));
};

// My Orders
export const myOrders = () => async (dispatch) => {
  dispatch(myOrderActions.myOrderRequest())

  const response = await fetch("http://localhost:4000/api/v1/orders/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token,
    },
  });
  const data = await response.json();
  
  if (data.success) dispatch(myOrderActions.myOrderSuccess(data.orders));
  else dispatch(myOrderActions.myOrderFail(data.message));
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
    dispatch(allOrderActions.allOrdersRequest());

    const response = await fetch("http://localhost:4000/api/v1/admin/orders", {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    const data = await response.json();
    console.log(data);
    if(data.success)
    dispatch(allOrderActions.allOrdersSuccess(data.orders));
    else dispatch(allOrderActions.allOrdersFail(data.message))

};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
    dispatch(updateOrderActions.updateOrderRequest());

    const response = await fetch(`http://localhost:4000/api/v1/admin/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      body: JSON.stringify(order),
    });

    const data = await response.json()
    console.log(data);
    if(data.success)
    dispatch(updateOrderActions.updateOrderSuccess(data.success));
    else dispatch(updateOrderActions.updateOrderfail(data.message));

  
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch(deleteOrderActions.deleteOrderRequest());

    const { data } = await fetch(`http://localhost:4000/api/v1/admin/order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });

    dispatch(deleteOrderActions.deleteOrderSuccess(data.success));
  } catch (error) {
    dispatch(deleteOrderActions.deleteOrderfail(error.response.data.message));
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {

    dispatch(getOrderActions.getOrderRequest());

    const response = await fetch(`http://localhost:4000/api/v1/order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
  const data = await response.json();
  if(data.success)
    dispatch(getOrderActions.getOrderSuccess(data.order));
 else
    dispatch(getOrderActions.getOrderFail(data.message));
  
};
