import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    product: [],
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        ListProduct: (state,action) => {
            return {...state,product:action.payload}
        }
    }
})
export const { ListProduct } = productSlice.actions;
export default productSlice.reducer;