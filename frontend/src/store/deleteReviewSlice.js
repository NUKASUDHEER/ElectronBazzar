import {createSlice} from '@reduxjs/toolkit'

const deleteReviewSlice = createSlice({
    name: 'deleteReview',
    initialState: {
        loading: true,
        isDeleted: false,
        error: null
    },
    reducers: {
        deletReviewRequest(state) {
            state.loading = true;
        },
        deleteReviewSuccess(state, action) {
            state.loading = false;
            state.isDeleted = action.payload;
        },
        deleteReviewFail(state, action) {
            state.loading = true;
            state.error =action.payload;
        },
        deleteReviewReset(state) {
            state.isDeleted = false;
            state.error = null;
        }
    }
})

export default deleteReviewSlice