import {createSlice} from '@reduxjs/toolkit'

const createProductSlice = createSlice({
    name: 'newProduct',
    initialState: {
        loading:true,
        success: false,
        product: [],
        error: null
    },

    reducers: {
        newProductRequest(state) {
            state.loading = true;
        },
        newProductRequestSuccess(state, action) {
            state.loading = false;
            state.success = action.payload.success
            state.product = action.payload.product
        },
        newProductRequestFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        newProductRequestReset(state) {
            state.error = null;
        }

    }

})

export default createProductSlice