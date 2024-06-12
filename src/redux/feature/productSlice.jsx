import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    saleProduct:[],
    trendProduct: [],
    newProduct:[],
    Wishlist:[],
    listProduct:[],
    SaleListProduct:[]
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
        ListProduct: (state,action) => {
            return {
                ...state,
                listProduct: action.payload,
            };
        },

        SaleListProduct: (state,action) => {
            return {...state,SaleListProduct:action.payload}
        },
    }
})
export const { SaleProduct,TrendProduct,ListProduct,NewProduct,SaleListProduct } = productSlice.actions;
export default productSlice.reducer;