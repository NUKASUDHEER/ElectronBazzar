import{ createSlice } from '@reduxjs/toolkit'

const deleteProductSlice = createSlice({
    name: 'deleteProduct',
    initialState: {
        loading: true,
        isDeleted: false,
        error: null
    },
    reducers: {
        deleteProductRequest(state) {
            state.loading = true;
        },
        deleteProductRequestSucess(state, action) {
            state.loading = false;
            state.isDeleted = action.payload
        },
        deleteProductRequestFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        deleteProductRequestReset(state) {
            state.isDeleted = false;
            state.error = null
        }
    }
})

export default deleteProductSlice