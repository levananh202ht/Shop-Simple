import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: [],
}

export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers: {
        addToCart: (state,action) => {

        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
