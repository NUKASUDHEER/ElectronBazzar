import {createSlice} from '@reduxjs/toolkit'


const getOrderSlice = createSlice({

    name: 'getOrder',
    initialState: {
        loading: true,
        order: {},
        error: null
    },

    reducers: {
        getOrderRequest(state) {
            state.loading = true;
        },

        getOrderSuccess(state, action) {
            state.loading = false
            state.order = action.payload
        },
        getOrderFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
    getOrderReset(state) {
            state.error = null
        }
    
    }

})



export default getOrderSlice