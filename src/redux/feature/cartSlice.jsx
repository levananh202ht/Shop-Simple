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
            const item = carts.findIndex((pro) => pro.id === action.payload.id);
            if(item === -1) {
                return {
                    ...state,
                    carts: [...carts,action.payload],
    
                }
            }else {
                    const updateItems = carts.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                    return {
                    ...state,
                    carts: updateItems,
                    };
            }
            
        },
        reduceFromCart: (state, action) => {
            const { carts } = state;
            const item = carts.find((pro) => pro.id === action.payload);
            if (item.quantity > 1) {
            const updateItems = carts.map((item) =>
                item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            return {
                ...state,
                carts: updateItems,
            };
            } else {
            const updateItems = carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: updateItems,
            };
            }
        },
        removeFromCart: (state, action) => {
            const { carts } = state;
            const updateCarts = carts.filter((item) => item.id !== action.payload);
            return {
            ...carts,
            carts: updateCarts,
            };
        },
    }
})
export const {addToCart,reduceFromCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
