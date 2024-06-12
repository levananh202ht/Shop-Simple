import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    product: [],
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        ListProduct: (state,action) => {

        }
    }
})
export const { ListProduct } = productSlice.actions
export default productSlice.reducer