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
            console.log(carts,"123");
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
            
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
