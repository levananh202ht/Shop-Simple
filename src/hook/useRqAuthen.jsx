import { useDispatch, useSelector } from "react-redux";
import { upDateStateOpenLogin } from "../redux/feature/authenSlice";

const useAuthen = () => {
    const isLogin = useSelector((state) => state.authenSlice.isLogin);
    const dispath = useDispatch();

    const isCheckAuthen = (action) => {
        if (isLogin) {
        action();
        } else {
        dispath(upDateStateOpenLogin(true));
        }
    };
    return isCheckAuthen;
};
export default useAuthen;
