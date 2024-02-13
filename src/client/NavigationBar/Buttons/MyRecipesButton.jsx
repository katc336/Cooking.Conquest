import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import MyRecipesIcon from "../images/MyRecipes.png"

const MyRecipesButton = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Link to="/my_recipes">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="Learn more about Cooking Conquest" arrow>
                        {isMobile
                            ? //if mobile...
                            <div>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <Stack direction="row">
                                        <img src={MyRecipesIcon} width="40px" />
                                        <Typography
                                            variant="h6"
                                            sx={{ mt: 1, ml: 3 }}>
                                            My Recipe Spellbook
                                        </Typography>
                                    </Stack>
                                </Button>
                            </div>
                            : //if not mobile...
                            <div>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <Stack direction="column">
                                        <Typography sx={{ textAlign: "center" }}>
                                            <img src={MyRecipesIcon} width="50px" />
                                        </Typography>
                                        <Typography sx={{ mr: 1 }}>
                                            My Recipe Spellbook
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

export default MyRecipesButton;