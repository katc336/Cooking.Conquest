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

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            {isMobile
                ? //if mobile...
                <MobileNavBar />
                ://if NOT mobile...
                <Stack direction="row">
                    IMG
                    <Typography variant="h3" sx={{ fontFamily: "Tahoma", flexGrow: 1 }}>
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
                                    <HomeIcon/>
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
                        <MenuIcon />
                    </Stack>
                </Stack>
            }
        </>
    )
}

export default NavBar;