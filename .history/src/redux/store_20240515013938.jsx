import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./feature/productSlice";


const reducer = combineReducers({
    pro
});
const store = configureStore({
    reducer,
});
export default store;