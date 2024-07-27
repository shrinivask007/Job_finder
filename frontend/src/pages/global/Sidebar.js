import React from 'react';
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import logoDashboard from '../../images/user.png';
import Person3Icon from '@mui/icons-material/Person3';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';


const SidebarAdm = () => {
    const { userInfo } = useSelector(state => state.signIn);
    const {  collapsed } = useProSidebar();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(userLogoutAction());
        navigate('/');
        setTimeout(() => {
            window.location.reload(true);
        }, 500);
    };

    return (
        <Sidebar backgroundColor="#121212" style={{ borderRightStyle: 'none' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
                <Box>
                    <Box sx={{ pt: 3, pb: 5, display: 'flex', justifyContent: 'center' }}>
                        {collapsed ? (
                            <Avatar alt="logo dashboard" />
                        ) : (
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    style={{ width: '100px', height: '100px', textAlign: 'center', transition: 'all ease-out .5s' }}
                                    src={logoDashboard}
                                    alt="logo dashboard"
                                />
                            </Box>
                        )}
                    </Box>
                    <Menu
                        menuItemStyles={{
                            button: {
                                [`&.${menuClasses.button}`]: {
                                    color: '#e0e0e0',
                                },
                                [`&.${menuClasses.disabled}`]: {
                                    color: 'grey',
                                },
                                '&:hover': {
                                    backgroundColor: '#333333',
                                    color: '#e0e0e0',
                                },
                            },
                            icon: {
                                [`&.${menuClasses.icon}`]: {
                                    color: '#e0e0e0',
                                },
                            },
                        }}
                    >
                        {userInfo && userInfo.role === 1 ? (
                            <>
                                <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}>
                                    Admin Dashboard
                                </MenuItem>
                                <MenuItem component={<Link to="/admin/jobs" />} icon={<WorkIcon />}>
                                   Edit Jobs
                                </MenuItem>
                                {/* <MenuItem component={<Link to="/admin/users" />} icon={<GroupAddIcon />}> Users </MenuItem>
                                <MenuItem component={<Link to="/admin/category" />} icon={<CategoryIcon />}> Category </MenuItem> */}
                                <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Home </MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem component={<Link to="/user/dashboard" />} icon={<DashboardIcon />}>
                                    User Dashboard
                                </MenuItem>
                                <MenuItem component={<Link to="/user/jobs" />} icon={<WorkHistoryIcon />}>
                                    Applied Jobs
                                </MenuItem>
                                {/* <MenuItem component={<Link to="/user/info" />} icon={<Person3Icon />}> Personal Info </MenuItem> */}
                                <MenuItem component={<Link to="/" />} icon={<HomeIcon />}> Home </MenuItem>
                            </>
                        )}
                    </Menu>
                </Box>
                <Box sx={{ pb: 2 }}>
                    <Menu
                        menuItemStyles={{
                            button: {
                                [`&.${menuClasses.button}`]: {
                                    color: '#e0e0e0',
                                },
                                '&:hover': {
                                    backgroundColor: '#333333',
                                    color: '#e0e0e0',
                                },
                            },
                            icon: {
                                [`&.${menuClasses.icon}`]: {
                                    color: '#e0e0e0',
                                },
                            },
                        }}
                    >
                        <MenuItem onClick={logOut} icon={<LoginIcon />}>
                            Log out
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Sidebar>
    );
};

export default SidebarAdm;
