import {createSlice} from '@reduxjs/toolkit'

const allOrderSlice = createSlice({
    name: 'allOrders',
    initialState: {
        loading: true,
        error: null,
        orders:[]
    },
    reducers: {
        allOrdersRequest(state) {
            state.loading = true;
        },

        allOrdersSuccess(state, action) {
            state.loading = false;
            state.orders = action.payload
        },

        allOrdersFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        allOrdersReset(state) {
            state.error = null
        }

    }

})


export default allOrderSlice