import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import LeadershipBoardIcon from "../images/LeadershipBoardIcon.png"

const GuildBoardButton = () => {
    return (
        <>
            <Link to="/leadership_board">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="See which guild is winning with the best recipes!" arrow>
                        <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                            <Stack direction="column">
                                <Typography sx={{ textAlign: "center" }}>
                                    <img src={LeadershipBoardIcon} width="41px" />
                                </Typography>
                                <Typography sx={{ mr: 1 }}>
                                    Guild Leader Board
                                </Typography>
                            </Stack>
                        </Button>
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default GuildBoardButton;