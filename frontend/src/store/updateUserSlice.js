import { createSlice } from '@reduxjs/toolkit'

const updateUserSlice = createSlice({
    name: 'updateUser',
    initialState: {
        loading: true,
        isUpdated: false,
        error: null,
    },
    reducers: {
        updateUserRequest(state) {
            state.loading = true;
        },
        updateUserSuccess(state, action) {
            state.loading = false;
            state.isUpdated = action.payload
        },
        updateUserFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        updateUserReset(state) {
            state.isUpdated = false;
        }
    }
})

export default updateUserSlice