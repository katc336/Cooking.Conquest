import Button from "@mui/material/Button"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { useGetUserQuery } from '../../redux/api';

const MenuIcon = () => {

    const { data, error, isLoading } = useGetUserQuery();
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {data
                ?//if logged in...
                <div>
                    <Button
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: "#445D48" }}>
                        <AccountCircleIcon sx={{ minWidth: 70, minHeight: 35 }} />
                    </Button>
                    <Menu
                        id="account-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link
                                to="/account"
                                style={{ textDecoration: "none" }}>
                                <MenuItem>
                                    <Button sx={{ textTransform: "none", color: "#445D48"}}>
                                        My Account
                                    </Button>
                                </MenuItem>
                            </Link>
                            <MenuItem>
                                    <Button sx={{ textTransform: "none", color: "#445D48"}}>
                                        Logout
                                    </Button>
                                </MenuItem>
                        </motion.div>
                    </Menu>
                </div>

                ://if NOT logged in...
                <div>
                    <Button
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: "#445D48" }}>
                        <AccountCircleIcon sx={{ minWidth: 70, minHeight: 35 }} />
                    </Button>
                    <Menu
                        id="account-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}>
                                <MenuItem>
                                    <Button sx={{ textTransform: "none",  color: "#445D48"}}>
                                        Login
                                    </Button>
                                </MenuItem>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link
                                to="/register"
                                style={{ textDecoration: "none" }}>
                                <MenuItem>
                                    <Button sx={{ textTransform: "none",  color: "#445D48"}}>
                                        Sign Up
                                    </Button>
                                </MenuItem>
                            </Link>
                        </motion.div>
                    </Menu>
                </div>}
        </>
    )
}
export default MenuIcon