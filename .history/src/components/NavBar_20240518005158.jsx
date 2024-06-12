import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { BsCart2 } from "react-icons/bs";
import { IconButton } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { ListCartOrder } from './ListCartOder';
import LoginPopup from './LoginPopup';

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
            title:"Home"
        },
        {
            to:"product",
            title:"Product"
        },
        {
            to:"contact",
            title:"Contact"
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
            <Toolbar className='flex justify-between'>
                <div>
                <NavLink to="/"  className="text-4xl font-bold text-green-700" >Shopify</NavLink>
                </div>
                <div className='flex text-xl font-semibold text-black '>
                    <div className='flex items-center justify-center gap-5'>
                    {
                        listMenu.map((item,index) => <NavLink 
                        className={({ isActive }) =>
                            isActive ? "text-green-700" : ""
                        } 
                        key={index}  
                        to={item.to}>{item.title}</NavLink>)
                    }
                    </div>
                </div>
                <div className='flex'>
                    <LoginPopup className="justify-center  flexitems-center"/>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        className='relative'
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                        >
                        <BsCart2 className='text-black' />
                        <div className='absolute top-0 flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -right-3'>
                            <p className='text-sm font-normal text-white '>5</p>
                        </div>
                    </IconButton>
                </div>
            
            </Toolbar>
        </AppBar>
        <Main open={open} className='!p-0'>
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
                <ListCartOrder />
            </div>
        </Drawer>
        </Box>
    );
}
