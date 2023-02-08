import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: true,
        isAuthenticated: false,
        user: null,
        error: null
    },
    reducers: {
        setUser(state, action) {
            state.isAuthenticated = action.payload.success;
            if (action.payload.success) { state.user = action.payload.user; state.message = '' }
            else state.message = action.payload.message;
        },
        setUserFail(state, action) {
            state.error = action.payload.message
            state.isAuthenticated = false
            state.message = null
        },
        logOutUser(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.message = null;
        },
        clearError(state) {
            state.message = null;
            state.updateMessage = null;
            state.isUpdated = false;
            state.error = null;
        },
        updatePwd(state, action) {
            state.isUpdated = action.payload.success
            state.updateMessage = action.payload.message
        },
        setUserUpdate(state) {
            state.isUpdated = true
        },
        setisUpdate(state) {
            state.isUpdated = false
            state.updateMessage = null;
        },
        stateReset(state) {
            state.isUpdated = false;
            state.updateMessage = null
        },

        loginRequest(state, action) {
            state.loading = true;
            state.isAuthenticated = false
        },

        loginSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload
        },

        loginFail(state, action) {
            state.loading = false;
            state.error = action.payload
            state.user = null;
            state.isAuthenticated = false;
        },

        registerUserRequest(state) {
            state.loading = true;
            state.isAuthenticated = false;
        },

        registerUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload
        },

        registerUserFail(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload
        },

        logoutSuccess(state) {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        },

        logoutFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },

        loadUserRequest(state) {
            state.loading = true;
            state.isAuthenticated = false;
        },

        loadUserSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload
        },

        loadUserFail(state, action) {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload
        },

        clearErrors(state) {
            state.loading = true;
            state.error = null;
        }


    }
})

export default userSlice;