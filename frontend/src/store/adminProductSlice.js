import { createSlice } from "@reduxjs/toolkit";

const adminProductSlice = createSlice({
    name: 'adminProducts',
    initialState: {
        loading: true,
        products: [],
        error: false
    },
    reducers: {
        adminProductRequest(state) {
            state.loading = true;
        },
        adminProductRequestSuccess(state, action) {
            state.loading = false;
            state.products = action.payload;
        },
        adminProductRequestFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        adminProductRequestReset(state) {
            state.error = null;
        }

    }
})

export default adminProductSlice;