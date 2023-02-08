import { createSlice } from "@reduxjs/toolkit";

const singleProductsSlice = createSlice({
  name: "singleProduct",
  initialState: {
    loading:true,
    error: null,
    product: [],
  },
  reducers: {
    singleProductRequest(state) {
      state.loading = true;
    },
    // action:{
    //   payload:product: {

    //   }
    // }
    setSingleProductSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    setSingleProductFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setsSingleProductReset(state) {
        state.error = null;
    },
  },
});

export default singleProductsSlice;
