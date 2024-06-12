import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    wishlist:[]
}

export const wishListSlice = createSlice({
    name:"wishListSlice",
    initialState,
    reducers: {

        removeFromWishlist: (state, action) => {
            const { wishlist } = state;
            const updateWishlist = wishlist.filter((item) => item.id !== action.payload);
            return {
            ...wishlist,
            wishlist: updateWishlist,
            };
        },
        AddWishlist: (state,action) => {
            const {wishlist} = state
            return {
                ...state,
                wishlist: [...wishlist, action.payload]
            }
        }
    }
})
export const {removeFromWishlist,AddWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;
