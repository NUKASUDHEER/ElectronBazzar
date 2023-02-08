import { createSlice } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    products: [],
    loading: false,
    productsCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0
  },
  reducers: {
    getAllProductRequest(state, action) {
      state.loading = true;
      state.products = []
    },
    getAllProductsSucces(state, action) {
      state.loading = false;
      state.products = action.payload.products
      state.productsCount = action.payload.productsCount
      state.resultPerPage = action.payload.resultPerPage
      state.filteredProductsCount = action.payload.filteredProductsCount
    },
    getAllProductsFail(state, action) {
      state.loading = false;
      state.error = action.payload
    }

  },
});

export default allProductsSlice;
