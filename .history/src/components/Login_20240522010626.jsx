import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import useHandleChange from "../hook/useHandleChange";
import { useDispatch, useSelector } from "react-redux";
import { doLogin, upDateStateOpenLogin } from "../redux/feature/authenSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

export default function Login() {
    const isOpen = useSelector((state) => state.authenSlice.isOpenLogin);
    const dispath = useDispatch();
    const { formLogin, handleChange } = useHandleChange({
        userName: "",
        password: "",
    });
    const handleClose = () => {
        dispath(upDateStateOpenLogin(false));
    };

    const handleSubmit = () => {
        dispath(doLogin(formLogin));

    };

    return (
        <React.Fragment>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Login
            </DialogTitle>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent dividers>
            <div>
                <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                className="w-full"
                size="small"
                type="text"
                name="userName"
                onChange={handleChange}
                />
            </div>
            <div className="mt-4">
                <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="w-full"
                size="small"
                name="password"
                onChange={handleChange}
                />
            </div>
            </DialogContent>
            <DialogActions>
            <Button variant="outlined"  onClick={handleClose}>
                Đóng
            </Button>
            <Button variant="contained"  onClick={handleSubmit}>
                Đăng nhập
            </Button>
            </DialogActions>
        </BootstrapDialog>
        </React.Fragment>
    );
}
