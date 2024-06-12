import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import authenSlice from "./feature/authenSlice";
import wishSlice from "./feature/wishSlice";
import drawerSlice from "./feature/drawerSlice";


const reducer = combineReducers({
    productSlice,
    cartSlice,
    authenSlice,
    wishSlice,
    drawerSlice
});
const store = configureStore({
    reducer,
});
export default store;