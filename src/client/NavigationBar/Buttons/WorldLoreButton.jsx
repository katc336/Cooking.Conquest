import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import WorldLoreIcon from "../images/WorldLoreIcon.png"

const WorldLoreButton = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Link to="/lore">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <Tooltip title="Read about the Enchanted Gastronomy Realm" arrow>
                        {isMobile
                            ? //if mobile...
                            <div>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <Stack direction="row">
                                        <img src={WorldLoreIcon} width="37px" />
                                        <Typography
                                            variant="h6"
                                            sx={{ mt: 1, ml: 3 }}>
                                            Learn About Lore
                                        </Typography>
                                    </Stack>
                                </Button>
                            </div>
                            : //if not mobile...
                            <div>
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
                            </div>}
                    </Tooltip>
                </motion.div>
            </Link>
        </>
    )
}

export default WorldLoreButton;