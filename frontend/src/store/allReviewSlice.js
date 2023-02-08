import { createSlice } from "@reduxjs/toolkit";

const allReviewSlice = createSlice({
    name: 'allReview',
    initialState: {
        loading: true,
        reviews: {},
        error: null,
    },
    reducers: {
        allReviewRequest(state) {
            state.loading = true;
        },
        allReviewSuccess(state, action) {
            state.loading = false;
            state.reviews = action.payload;
        },
        allReviewFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        allReviewReset(state) {
            state.error = null
        }

    },
})

export default allReviewSlice