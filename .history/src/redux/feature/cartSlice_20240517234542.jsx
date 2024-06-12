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
            console.log(item."112233");
            if(item === -1) {
                return {
                    ...state,
                    carts: [...carts,action.payload],
    
                }
            }else {
                // const updateItem = carts.map((item) => 
                //     item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                // );
                // return {
                //     ...state,
                //     carts:updateItem,
                // };
            }
            
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
