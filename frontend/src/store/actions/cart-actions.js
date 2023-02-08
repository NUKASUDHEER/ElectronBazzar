import { cartActions } from "../index";

export const addItem = (id,quantity) => async (dispatch, getState) => {
    console.log(id);
    let url = `http://localhost:4000/api/v1/product/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    dispatch(cartActions.addItemToCart(
        {
            id: data.product._id,
            name: data.product.name,
            price: data.product.price,
            stock: data.product.Stock,
            quantity
        }
    ))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const removeItem = (id) => async (dispatch, getState) => {
    console.log(id);
    let url = `http://localhost:4000/api/v1/product/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    dispatch(cartActions.removeItemsFromCart(
        {
            id: data.product._id,
            name: data.product.name,
            price: data.product.price,
            stock: data.product.Stock,
        }
    ))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const removeCompleteCartItem = (id) => async (dispatch, getState) => {
    console.log(id);
    let url = `http://localhost:4000/api/v1/product/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    dispatch(cartActions.removeCompleteCartItem(
        {
            id: data.product._id,
            name: data.product.name,
            price: data.product.price,
            stock: data.product.Stock,
        }
    ))

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}

export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch(cartActions.saveShippingInfo(data));
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  

