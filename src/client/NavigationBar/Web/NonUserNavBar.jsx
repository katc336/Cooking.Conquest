import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack";

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import CookingConquestText from "../images/CookingConquestText.png"
import InformationButton from "../Buttons/InformationButton";
import SearchButton from "../Buttons/SearchButton"
import WorldLoreButton from "../Buttons/WorldLoreButton"
import GuildBoardButton from "../Buttons/GuildBoardButton";

const NonUserNavBar = () => {

    return (
        <>
                <AppBar sx={{ pt: 1, backgroundColor: "#F4F9F4" }}>
                    <Stack direction="row">
                        <Box sx={{ mx: 2, flexGrow: 1 }}>
                            <Link to="/">
                                <img src={CookingConquestText} alt="Cooking Conquest Fantasy Font" width="200px" />
                            </Link>
                        </Box>
                        <Stack direction="row">
                            <InformationButton />
                            <WorldLoreButton />
                            <GuildBoardButton />
                            <SearchButton />
                            <Link to="/register">
                                <motion.div whileHover={{ scale: 1.2 }}>
                                    <Button
                                        sx={{
                                            mt: 2,
                                            mx: 5,
                                            p: 2,
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
                        </Stack>
                    </Stack>
                </AppBar>
        </>
    )
}

export default NonUserNavBar;