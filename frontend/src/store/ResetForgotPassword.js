import { createSlice } from "@reduxjs/toolkit";

const resetForgotPasswordSlice = createSlice({
    name: 'resetForgotPassword',
    initialState: {
        error: null,
        message: null,
        success: false
    },
    reducers: {
        resetForgotPasswordSuccess(state, action) {
            state.success = action.payload.success
            state.message = action.payload.message
        },
        resetForgotPasswordFail(state, action) {
            state.success = false
            state.error = action.payload;
        },
        resetForgotPasswordReset(state) {
            state.error = null;
            state.message = null;
            state.success = false;
        }

    }
})

export default resetForgotPasswordSlice