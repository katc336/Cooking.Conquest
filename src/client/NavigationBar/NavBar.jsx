import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import HomeIcon from '@mui/icons-material/Home';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import MobileNavBar from './MobileNavBar';
import MenuIcon from './MenuIcon';

import { useGetUserQuery } from "../../redux/api";

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data, error, isLoading } = useGetUserQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <>
            {isMobile
                ? //if mobile...
                <MobileNavBar />
                ://if NOT mobile...
                <Stack direction="row">
                    IMG
                    <Typography variant="h1" sx={{ fontSize: "30px", color: "#445D48", fontStretch: "expanded", fontFamily: "Marker Felt, fantasy", flexGrow: 1 }}>
                        Cooking Conquest
                    </Typography>
                    <Stack direction="row">
                        <Link to="/">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button
                                    sx={{
                                        mx: 5,
                                        color: "#445D48",
                                        fontFamily: "Tahoma",
                                        textTransform: "none"
                                    }}>
                                    <HomeIcon />
                                    Home
                                </Button>
                            </motion.div>
                        </Link>
                        <Link to="/recipes">
                            <motion.div whileHover={{ scale: 1.2 }}>
                                <Button
                                    sx={{
                                        mx: 5,
                                        color: "#445D48",
                                        fontFamily: "Tahoma",
                                        textTransform: "none"
                                    }}>
                                    See Recipes
                                </Button>
                            </motion.div>
                        </Link>
                        {data
                            ?
                            <div>
                                <MenuIcon />
                            </div> :
                            <div>
                                <Link to="/register">
                                    <motion.div whileHover={{ scale: 1.2 }}>
                                        <Button
                                            sx={{
                                                mr: 3,
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
                            </div>
                        }
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default NavBar;