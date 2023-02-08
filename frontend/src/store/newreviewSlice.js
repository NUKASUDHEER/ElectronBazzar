import { createSlice } from "@reduxjs/toolkit";

const newReviewSlice = createSlice({
    name: 'newReview',
    initialState: {
        loading: true,
        success: false,
        error: null
    },
    reducers: {
        newReviewRequest(state) {
            state.loading = true;
        },
        newReviewSuccess(state, action) {
            state.loading = false;
            state.success = action.payload
        },
        newReviewFail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        newReviewReset(state) {
            state.success = false;
        }
    }
})

export default newReviewSlice