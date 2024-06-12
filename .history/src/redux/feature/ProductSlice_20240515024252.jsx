import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    saleProduct:[],
    product: [],
    newProduct:[]
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        
        SaleProduct: (state,action) => {
            return {...state,saleProduct:action.payload}
        },
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
export const { SaleProduct,ListProduct,NewProduct } = productSlice.actions;
export default productSlice.reducer;