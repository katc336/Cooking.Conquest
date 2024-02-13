import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from "react-router-dom";

import CookingConquestText from "./../images/CookingConquestText.png"
import MyAccountButton from '../Buttons/MyAccountButton';
import MyRecipesButton from '../Buttons/MyRecipesButton';
import SearchButton from "../Buttons/SearchButton"
import WorldLoreButton from '../Buttons/WorldLoreButton';
import InformationButton from '../Buttons/InformationButton';
import GuildBoardButton from '../Buttons/GuildBoardButton';

const MobileUserNavBar = () => {
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
                    <Link to="/">
                        <Button
                            sx={{
                                mx: 1,
                                color: "#445D48",
                                fontFamily: "Tahoma",
                                textTransform: "none"
                            }}>
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Button>
                    </Link>
                </AccordionDetails>
                <AccordionDetails>
                    <MyAccountButton />
                    <MyRecipesButton />
                    <SearchButton />
                    <GuildBoardButton />
                    <WorldLoreButton />
                    <InformationButton />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default MobileUserNavBar