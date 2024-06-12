import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    wishlist:[]
}

export const wishSlice = createSlice({
    name:"wishSlice",
    initialState,
    reducers: {
        AddWishlist: (state,action) => {
            const {wishlist} = state;
            const item = wishlist.findIndex((pro) => pro.id === action.payload.id);
            if(item === -1) {
                return {
                    ...state,
                    wishlist: [...wishlist,action.payload],
    
                }
            }else {
                    const updateItems = wishlist.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                    return {
                    ...state,
                    wishlist: updateItems,
                    };
            }
            // const {wishlist} = state;
            // return {
            //     ...state,
            //     wishlist: [...wishlist, action.payload]
            // }
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
