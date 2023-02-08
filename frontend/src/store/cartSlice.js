import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo") ?
      JSON.parse(localStorage.getItem("shippingInfo")) : {}
  },
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex((i) => item.id === i.id);
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      let updatedCart;
      if (isItemExist) {
        updatedCart = [...state.cartItems];
        updatedCart[itemIndex].stock = action.payload.stock;
        console.log(updatedCart[itemIndex].stock);
        const curQty = updatedCart[itemIndex].quantity;
        console.log(curQty, item.quantity);
        const newQty = curQty + item.quantity;

        if (newQty > updatedCart[itemIndex].stock)
          updatedCart[itemIndex].quantity = updatedCart[itemIndex].stock;
        else updatedCart[itemIndex].quantity = newQty;

        updatedCart[itemIndex].price = action.payload.price;
      } else {
        updatedCart = [...state.cartItems, action.payload];
      }
      state.cartItems = updatedCart;
    },
    removeItemsFromCart(state, action) {
      const item = action.payload;
      const itemIndex = state.cartItems.findIndex((i) => i.id === item.id);
      const wantedItem = state.cartItems[itemIndex];
      let updatedCart;
      if (wantedItem.quantity === 1) {
        updatedCart = state.cartItems.filter((i) => i.id !== item.id);
      } else {
        wantedItem.quantity--;
        updatedCart = [...state.cartItems];
        updatedCart[itemIndex] = wantedItem;
      }
      state.cartItems = updatedCart;
    },
    removeCompleteCartItem(state, action) {
      let item = action.payload;
      let updatedCart = state.cartItems.filter((i) => i.id !== item.id);
      state.cartItems = updatedCart;
    },
    saveShippingInfo(state, action) {
      state.shippingInfo = action.payload;
    }
  },
});

export default cartSlice;
