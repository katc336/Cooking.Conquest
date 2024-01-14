import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import SearchIcon from "../images/SearchIcon.png"

const SearchButton = () => {
    return (
        <>
            <Link to="/recipes">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="See recipe quests and start cooking!" arrow>
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
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default SearchButton;