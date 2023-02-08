import { createSlice } from "@reduxjs/toolkit";

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState: {
        error: null,
        message: null,
        success: false
    },
    reducers: {
        forgotPasswordSuccess(state, action) {
            state.success = action.payload.success
            state.message = action.payload.message
        },
        forgotPasswordFail(state, action) {
            state.success = false
            state.error = action.payload;
        },
        forgotPasswordReset(state) {
            state.error = null;
            state.message = null;
            state.success = false;
        }

    }
})

export default forgotPasswordSlice