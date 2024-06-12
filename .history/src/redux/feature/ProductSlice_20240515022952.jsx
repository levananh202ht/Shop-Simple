import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    product: [],
    newProduct:[]
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        ListProduct: (state,action) => {
            return {...state,product:action.payload}
        },
        NewProduct: (state,action) => {
            return {
                ...state,
                newProduct: action.payload,
            };
        }
    }
})
export const { ListProduct,NewProduct } = productSlice.actions;
export default productSlice.reducer;