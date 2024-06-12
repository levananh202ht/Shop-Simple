import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlice";
import addToCart from "./feature/cartSlice";


const reducer = combineReducers({
    productSlice,
    addToCart,
});
const store = configureStore({
    reducer,
});
export default store;