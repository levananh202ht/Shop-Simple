import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: [],
}

export const cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            const {carts} = state;
            return {
                ...state,
                carts: [...carts,action.payload],

            }
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
