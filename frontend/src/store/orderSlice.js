import {createSlice} from '@reduxjs/toolkit'


const orderSlice = createSlice({

    name: 'Order',
    initialState: {
        loading: false,
        order: {},
        error: null
    },

    reducers: {
        createOrderRequest(state) {
            state.loading = true;
        },

        createOrderSuccess(state, action) {
            state.loading = false
            state.order = action.payload
        },
        createOrderFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        createOrderReset(state) {
            state.error = null
        }
    
    }

})



export default orderSlice