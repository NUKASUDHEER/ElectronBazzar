import { createSlice } from '@reduxjs/toolkit'

const getAllUserSlice = createSlice({
    name: 'getAllUser',
    initialState: {
        loading: true,
        users: [],
        error: false
    },
    reducers: {
        getAllUserRequest(state) {
            state.loading = true;
        },
        getAllUserSuccess(state, action) {
            state.loading = false;
            state.users = action.payload
        },
        getAllUserFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        getAllUserReset(state) {
            state.error = null;
        }
    }
})

export default getAllUserSlice