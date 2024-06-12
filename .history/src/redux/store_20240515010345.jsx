import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./feature/ProductSlice";


const reducer = combineReducers({
    productSlice,
});
const store = configureStore({
    reducer
})
export default store;