import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    wishlist:[]
}

export const wishSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers: {
        AddWishlist: (state,action) => {
            const {wishlist} = state
            return {
                ...state,
                wishlist: [...wishlist, action.payload]
            }
        },
        removeFromWish: (state, action) => {
            const { wishlist } = state;
            const updateWish = wishlist.filter((item) => item.id !== action.payload);
            return {
            ...wishlist,
            wishlist: updateWish,
            };
        },
    }
})
export const {AddWishlist,removeFromWish} = wishSlice.actions;
export default wishSlice.reducer;
