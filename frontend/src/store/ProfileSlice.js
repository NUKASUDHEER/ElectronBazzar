import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    isUpdated: false,
    error: null,
  },
  reducers: {
    updatePasswordSuccess(state) {
      state.isUpdated = true;
    },
    updatePasswordFailed(state, action) {
      state.isUpdated = false;
      state.error = action.payload.message;
    },
    updatePasswordReset(state) {
      state.isUpdated = false;
      state.error = null;
    },
  },
});

export default profileSlice;
