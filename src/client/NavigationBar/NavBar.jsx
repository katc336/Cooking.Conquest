import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import MobileNavBar from './MobileNavBar';
import MenuIcon from './MenuIcon';

import { useGetUserQuery } from "../../redux/api";
import SearchIcon from "./SearchIcon.png"

const NavBar = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            {isMobile
                ? //if mobile...
                <MobileNavBar />
                ://if NOT mobile...
                <AppBar sx={{ pt: 1, backgroundColor: "#F4F9F4" }}>
                    <Stack direction="row">
                        <Box sx={{ mx: 2 }}>
                            <Link to="/">
                                <Tooltip title="Retun to Homepage">
                                    LOGO
                                </Tooltip>
                            </Link>
                        </Box>
                        <Typography variant="h1" sx={{ fontSize: "30px", color: "#445D48", fontFamily: "Marker Felt, fantasy", flexGrow: 1 }}>
                            Cooking Conquest
                        </Typography>
                        <Stack direction="row">
                            <Link to="/recipes">
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <Tooltip title="Find new recipe quests" arrow>
                                        <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                            <Typography sx={{ mr: 1 }}>
                                                Find Vegetarian Recipes
                                            </Typography>
                                            <img src={SearchIcon} width="30px" />
                                        </Button>
                                    </Tooltip>
                                </motion.div>
                            </Link>
                            <Link to="/register">
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <Button
                                        sx={{
                                            mx: 5,
                                            color: "#C07F00",
                                            borderRadius: "10px",
                                            backgroundColor: "#FFF47D",
                                            border: 2,
                                            borderBottom: 5,
                                            borderColor: "#FED049",
                                            textTransform: "none"
                                        }}>
                                        Get Started!
                                    </Button>
                                </motion.div>
                            </Link>
                        </Stack>
                    </Stack>
                </AppBar>
            }
        </>
    )
}

export default NavBar;