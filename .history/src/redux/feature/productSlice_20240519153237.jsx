import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    saleProduct:[],
    trendProduct: [],
    newProduct:[],
    Wishlist:[]
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers: {
        
        SaleProduct: (state,action) => {
            return {...state,saleProduct:action.payload}
        },
        TrendProduct: (state,action) => {
            return {...state,trendProduct:action.payload}
        },
        NewProduct: (state,action) => {
            return {
                ...state,
                newProduct: action.payload,
            };
        },
    }
})
export const { SaleProduct,TrendProduct,ListProduct,NewProduct } = productSlice.actions;
export default productSlice.reducer;