import React, { useState } from 'react';
import './UserDrawer.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UserOrder from '../../UserDashboard/UserOrder/UserOrder';
import { Image } from 'react-bootstrap';
import brandLogo from '../../../images/logos/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Switch, withRouter } from 'react-router';
import UserServiceList from '../../UserDashboard/UserServiceList/UserServiceList';
import UserReview from '../../UserDashboard/UserReview/UserReview';
import { Button, Menu, MenuItem } from '@mui/material';
import { useAuth } from '../../../Contexts/AuthContext';
import PrivateRoute from '../../PrivateRoute';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const UserDrawer = (props) => {

  const {loggedInUser, logout} = useAuth();
    
    const {history} = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const menuList1 = [
      {
        text: "Order",
        icon: <ShoppingCartIcon />,
        click: () => history.push("/user/order")
      },
      {
        text: "Service list",
        icon: <FeaturedPlayListIcon />,
        click: () => history.push("/user/service")
      },
      {
        text: "Review",
        icon: <RateReviewIcon />,
        click: () => history.push("/user/review")
      }
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
      <Box sx={{ display: 'flex' }}>
      <AppBar open={open} className="navbar-style">
        <Toolbar className="border-none" >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <div style={{margin:"auto", marginRight:"0"}}>
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={menuOpen ? 'true' : undefined}
                        onClick={handleClick}
                        style={{color:"black", textTransform: "capitalize", fontWeight:"bold", fontSize:"20px"}}
                    >
                        {loggedInUser && loggedInUser.displayName}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={menuOpen}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=> history.push("/")} >Return Home</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </div>

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="drawer-style">
        <DrawerHeader>
        {(open && <Image src={brandLogo} style={{height: "50px"}} className="brand-logo" />)}
          
          <IconButton onClick={handleDrawerClose}
            sx={{
              ...(!open && { display: 'none' }),
            }}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuList1.map((list) => {
            const {text, icon, click} = list;
            return (
            <ListItem button key={text} onClick={click}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
           )})}
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, }}>
        <Switch>
          <PrivateRoute path="/user/order">
            <UserOrder />
          </PrivateRoute>
          <PrivateRoute path="/user/service">
            <UserServiceList  />
          </PrivateRoute>
          <PrivateRoute path="/user/review">
            <UserReview  />
          </PrivateRoute>
        </Switch>
        
      </Box>
    </Box>
    );
};

export default withRouter(UserDrawer);