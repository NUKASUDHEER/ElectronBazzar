import { createSlice } from "@reduxjs/toolkit";

const myOrderSlice = createSlice({
    name: 'myOrder',
    initialState: {
        loading: true,
        error: null,
        orders: {},
    },

    reducers: {
        myOrderRequest(state) {
            state.loading = true;  
            state.orders = {}
        },
        myOrderSuccess(state, action) {
            state.orders = action.payload
            state.loading = false
        },
        myOrderFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        myOrderReset(state) {
            state.error = null;
        }
    }


})

export default myOrderSlice