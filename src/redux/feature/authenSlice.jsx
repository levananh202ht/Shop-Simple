import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    isOpenLogin: false,
    isLogin:
        localStorage.getItem("userName") !== "" && (localStorage.getItem("userName") ?? false),
    userName: localStorage.getItem("userName") ?? "",
};
console.log(
    localStorage.getItem("userName"),
    'localStorage.getItem("userName")'
);
export const authenSlice = createSlice({
    name: "authenSlice",
    initialState,
    reducers: {
        doLogin: (state, action) => {
        const { payload } = action;
        if (payload.userName === "anh" && payload.password === "123456") {
            localStorage.setItem("userName", payload.userName);
            toast.success("đăng nhập thành công", {
            duration: 1000,
            position: "top-center",
            style: {
                fontSize: "14px",
            },
            });
            return {
            ...state,
            isOpenLogin: false,
            isLogin: true,
            userName: payload.userName,
            };
        } else {
            toast.error("Sai tài khoản", {
            duration: 1000,
            position: "top-center",
            style: {
                fontSize: "14px",
            },
            });
        }
        return state;
        },
        upDateStateOpenLogin: (state, action) => {
        return {
            ...state,
            isOpenLogin: action.payload,
        };
        },
        doLogout: (state, action) => {
        localStorage.removeItem("userName");
        return {
            ...state,
            isOpenLogin: false,
            isLogin: false,
            userName: "",
        };
        },
    },
});
export const { doLogin, upDateStateOpenLogin, doLogout } = authenSlice.actions;

export default authenSlice.reducer;
