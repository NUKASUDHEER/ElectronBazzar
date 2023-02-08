import { createSlice } from "@reduxjs/toolkit";

const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {
    loading: false,
    isUpdated: false,
    error: null,
  },
  reducers: {
    updateProductRequest(state) {
      state.loading = true;
    },
    updateProductSuccess(state, action) {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    updateProductFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductReset(state) {
      state.isUpdated = false;
      state.error = null;
    },
  },
});

export default updateProductSlice;
