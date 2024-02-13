import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from "@mui/material/Box"

import { Link } from 'react-router-dom';

import CookingConquestText from "../images/CookingConquestText.png"
import InformationButton from "../Buttons/InformationButton";
import SearchButton from "../Buttons/SearchButton"
import WorldLoreButton from "../Buttons/WorldLoreButton"
import GuildBoardButton from "../Buttons/GuildBoardButton";

const MobileNonUserNavBar = () => {
    return (
        <div>
            <Accordion sx={{ backgroundColor: "#F4F9F4" }}>
                <AccordionSummary>
                    <MoreVertIcon />
                    <Box sx={{ ml: 1, flexGrow: 1 }}>
                        <Link to="/">
                            <img src={CookingConquestText} alt="Cooking Conquest Fantasy Font" width="80px" />
                        </Link>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to="/register">
                        <Button
                            fullWidth
                            sx={{
                                mb: 2,
                                p: 1,
                                color: "#C07F00",
                                borderRadius: "10px",
                                backgroundColor: "#FFF47D",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#FED049",
                                textTransform: "none"
                            }}>
                            Get Started and Sign Up!
                        </Button>
                    </Link>
                    <InformationButton />
                    <WorldLoreButton />
                    <GuildBoardButton />
                    <SearchButton />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MobileNonUserNavBar

