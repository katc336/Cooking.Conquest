import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import MyRecipesIcon from "./images/MyRecipes.png"

const MyRecipesButton = () => {
    return (
        <>
            <Link to="/my_recipes">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="Learn more about Cooking Conquest" arrow>
                        <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                            <Stack direction="column">
                                <Typography sx={{ textAlign: "center" }}>
                                    <img src={MyRecipesIcon} width="50px" />
                                </Typography>
                                <Typography sx={{ mr: 1 }}>
                                    About Cooking Conquest
                                </Typography>
                            </Stack>
                        </Button>
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default MyRecipesButton;