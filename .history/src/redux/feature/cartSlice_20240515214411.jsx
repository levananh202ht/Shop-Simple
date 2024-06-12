import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: [],
}

export default cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers: {
        addCart: (state,action) => {

        }
    }
})
export const {addCart} = cartSlice.actions;
