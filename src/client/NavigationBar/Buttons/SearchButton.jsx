import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import SearchIcon from "../images/SearchIcon.png"

const SearchButton = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Link to="/recipes">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="See recipe quests and start cooking!" arrow>
                        {isMobile
                            ? //if mobile...
                            <div>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <Stack direction="row">
                                        <img src={SearchIcon} width="45px" />
                                        <Typography
                                            variant="h6"
                                            sx={{ mt: 1, ml: 3 }}>
                                            Find Recipes
                                        </Typography>
                                    </Stack>
                                </Button>
                            </div>
                            : //if not mobile...
                            <div>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <Stack direction="column">
                                        <Typography sx={{ textAlign: "center" }}>
                                            <img src={SearchIcon} width="50px" />
                                        </Typography>
                                        <Typography sx={{ mr: 1 }}>
                                            Find Vegetarian Recipes
                                        </Typography>
                                    </Stack>
                                </Button>
                            </div>}
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default SearchButton;