import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show:true
}
const createProductFormChageSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        toggleShow(state) {
            state.show = !state.show
        }
    }
})

export const showAction = createProductFormChageSlice.actions;
export default createProductFormChageSlice;