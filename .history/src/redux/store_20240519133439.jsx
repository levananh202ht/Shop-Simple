import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import authenSlice from "./feature/authenSlice";
import wishSlice from "./feature/wishSlice";


const reducer = combineReducers({
    productSlice,
    cartSlice,
    authenSlice,
    wishSlice
});
const store = configureStore({
    reducer,
});
export default store;