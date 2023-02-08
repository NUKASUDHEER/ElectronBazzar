import { createSlice } from '@reduxjs/toolkit'

const deleteUserSlice = createSlice({
    name: 'deleteUser',
    initialState: {
        loading: true,
        isDeleted: false,
        message: null,
        error: null
    },
    reducers: {
        deleteUserRequest(state) {
            state.loading = true;
        },
        deleteUserSuccess(state, action) {
            state.loading = false;
            state.isDeleted = action.payload.success
            state.message = action.payload.message
        },
        deleteUserFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        deleteUserReset(state) {
            state.isDeleted = false;
        }
    }

})


export default deleteUserSlice;