import { createSlice } from '@reduxjs/toolkit'

const deleteOrderSlice = createSlice({
    name: 'deleteOrder',
    initialState: {
        isDeleted: false,
        loading: false,
        error: null
    },
    reducers: {
        deleteOrderRequest(state) {
            state.loading = true;
        },
        deleteOrderSuccess(state, action) {
            state.loading = false;
            state.isDeleted = action.payload
        },
        deleteOrderfail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        deleteOrderReset(state) {
            state.isDeleted = false;
        }

    }
})

export default deleteOrderSlice