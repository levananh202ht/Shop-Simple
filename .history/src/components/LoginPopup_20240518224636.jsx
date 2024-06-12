import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { upDateStateOpenLogin, doLogout } from "../redux/feature/authenSlice";
//import avatar from "../assets/images/profile.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function LoginPopup() {
    const dispath = useDispatch();
    const { isLogin, userName } = useSelector((state) => state.authenSlice);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(isLogin, "isLoginisLogin");
    return (
        <div>
        {isLogin ? (
            <>
            <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="!text-black !capitalize"
            >
                {/* <img src={avatar} /> */}
                {userName}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose} className="flex items-center gap-1">
                {" "}
                <AiOutlineUser />
                Profile
                </MenuItem>
                <MenuItem onClick={handleClose} to="product/wishlist"  className="flex items-center gap-1">
                <Link 
                className='bg-white rounded-3xl hover:text-blue-400'
                to="product/wishlist"
                navigate= {0}
                >
                <AiOutlineHeart  /> Wish List
                    
                </Link>
                </MenuItem>
                
                <MenuItem
                className="flex items-center gap-1"
                onClick={() => dispath(doLogout())}
                >
                {" "}
                <AiOutlineLogout /> Logout
                </MenuItem>
            </Menu>
            </>
        ) : (
            <Button
            onClick={() => dispath(upDateStateOpenLogin(true))}
            variant="contained"
            >
            Login
            </Button>
        )}

        <Login />
        </div>
    );
}
