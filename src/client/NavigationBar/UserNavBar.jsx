import AppBar from '@mui/material/AppBar';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"

import { Link } from "react-router-dom";

import SearchIcon from "./images/SearchIcon.png"
import MyRecipes from "./images/MyRecipes.png"
import MyAccount from "./images/MyAccount.png"
import WorldLoreIcon from "./images/WorldLoreIcon.png"
import MyAccountButton from './MyAccountButton';
import MyRecipesButton from './MyRecipesButton';
import SearchButton from "./SearchButton"
import WorldLoreButton from './WorldLoreButton';

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
                    </Stack>
                </AppBar>
            </Box>
        </div>
    )
}
export default UserNavBar