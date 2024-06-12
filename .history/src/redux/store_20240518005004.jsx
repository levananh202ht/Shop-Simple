import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import authenSlice from "./feature/authenSlice";


const reducer = combineReducers({
    productSlice,
    cartSlice,
    authenSlice
});
const store = configureStore({
    reducer,
});
export default store;