import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { BsCart2 } from "react-icons/bs";
import { IconButton } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: 'relative',
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function NavBar() {
    const listMenu = [
        {
            to:"/",
            title:"TRANG CHỦ"
        },
        {
            to:"product",
            title:"SẢN PHẨM"
        },
        {
            to:"contact",
            title:"LIÊN HỆ "
        }
    ]
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className='px-36 py-2 !bg-white  '>
            <Toolbar className=''>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1}} component="div" >
                    <NavLink to="/"  className="font-bold text-black text-4xl" >Shopify</NavLink>
                </Typography>
                <div className='text-black font-semibold text-xl flex '>
                    <div className='flex gap-5 justify-center items-center'>
                    {
                        listMenu.map((item,index) => <NavLink 
                        className={({ isActive }) =>
                            isActive ? "border-solid border-amber-300 border-b-2 mx-auto py-1" : ""
                        } 
                        key={index}  
                        to={item.to}>{item.title}</NavLink>)
                    }
                    </div>
                </div>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        className='relative'
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                        >
                        <BsCart2 className='text-black' />
                        <div className='absolute w-5 h-5 rounded-full bg-red-600 flex justify-center items-center top-0 -right-3'>
                            <p className=' text-white text-sm font-normal'>5</p>
                        </div>
                    </IconButton>
                </div>
            
            </Toolbar>
        </AppBar>
        <Main open={open}>
            <DrawerHeader />
            <Outlet />
        </Main>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            
            <DrawerHeader className='!p-5'>
            <IconButton onClick={handleDrawerClose} >
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            ab
            </DrawerHeader>
            <Divider  />
            <Divider />
            <div className='p-4'>
                Thực hiện ước mơ
            </div>
        </Drawer>
        </Box>
    );
}
