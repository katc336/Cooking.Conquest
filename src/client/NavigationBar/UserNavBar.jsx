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

const UserNavBar = () => {
    return (
        <div>
            <Box>
                <AppBar dir="rtl" sx={{ backgroundColor: "#F4F9F4" }}>
                    <Stack direction="row">
                        <Link to="/account">
                            <Tooltip title="My Account" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={MyAccount} width="50px" />
                                </Button>
                            </Tooltip>
                        </Link>
                        <Link to="/my_recipes">
                            <Tooltip title="My Recipes" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={MyRecipes} width="60px" />
                                </Button>
                            </Tooltip>
                        </Link>
                        <Link to="/recipes">
                            <Tooltip title="Find new recipe quests" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={SearchIcon} width="60px" />
                                </Button>
                            </Tooltip>
                        </Link>
                        <Link to="/lore">
                            <Tooltip title="Read About the Enchanted Gastronomy's History and Lore" arrow>
                                <Button sx={{ textTransform: "none", color: "green", mx: 3 }}>
                                    <img src={WorldLoreIcon} width="50px" />
                                </Button>
                            </Tooltip>
                        </Link>
                    </Stack>
                </AppBar>
            </Box>
        </div>
    )
}
export default UserNavBar