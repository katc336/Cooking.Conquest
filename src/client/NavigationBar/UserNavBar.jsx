import AppBar from '@mui/material/AppBar';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack"

import { Link } from "react-router-dom";

import CookingConquestText from "./images/CookingConquestText.png"
import MyAccountButton from './Buttons/MyAccountButton';
import MyRecipesButton from './Buttons/MyRecipesButton';
import SearchButton from "./Buttons/SearchButton"
import WorldLoreButton from './Buttons/WorldLoreButton';
import InformationButton from './Buttons/InformationButton';

const UserNavBar = () => {
    return (
        <div>
            <Box>
                <AppBar dir="rtl" sx={{ backgroundColor: "#F4F9F4" }}>
                    <Stack direction="row">
                        <MyAccountButton />
                        <MyRecipesButton />
                        <SearchButton />
                        <WorldLoreButton />
                        <InformationButton />
                        <Box sx={{ mr: 25, mt: 1, flexGrow: 1 }}>
                            <Link to="/">
                                <img src={CookingConquestText} alt="Cooking Conquest Fantasy Font" width="200px" />
                            </Link>
                        </Box>
                    </Stack>
                </AppBar>
            </Box>
        </div>
    )
}
export default UserNavBar