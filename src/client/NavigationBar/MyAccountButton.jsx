import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import MyAccount from "./images/MyAccount.png"

const MyAccountButton = () => {
    return (
        <>
            <Link to="/information">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="Return to your user dashboard" arrow>
                        <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                            <Stack direction="column">
                                <Typography sx={{ textAlign: "center" }}>
                                    <img src={MyAccount} width="46px" />
                                </Typography>
                                <Typography sx={{ mr: 1 }}>
                                    My Account
                                </Typography>
                            </Stack>
                        </Button>
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default MyAccountButton;