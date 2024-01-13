import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import WorldLoreIcon from "./images/WorldLoreIcon.png"

const WorldLoreButton = () => {
    return (
        <>
            <Link to="/information">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="Learn more about Cooking Conquest" arrow>
                        <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                            <Stack direction="column">
                                <Typography sx={{ textAlign: "center" }}>
                                    <img src={WorldLoreIcon} width="37px" />
                                </Typography>
                                <Typography sx={{ mr: 1 }}>
                                    Learn About Lore
                                </Typography>
                            </Stack>
                        </Button>
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default WorldLoreButton;