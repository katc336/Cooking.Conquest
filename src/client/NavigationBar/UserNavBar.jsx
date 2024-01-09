import AppBar from '@mui/material/AppBar';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack"
import Tooltip from "@mui/material/Tooltip"

import { Link } from "react-router-dom";

import SearchIcon from "./SearchIcon.png"
import MyRecipes from "./MyRecipes.png"
import MyAccount from "./MyAccount.png"

const UserNavBar = () => {
    return (
        <div>
            <Box>
                <AppBar dir="rtl" sx={{ backgroundColor: "#F4F9F4" }}>
                    <Stack direction="row">
                        <Link to="/account">
                            <Tooltip title="My Account" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={MyAccount} width="45px" />
                                </Button>
                            </Tooltip>
                        </Link>
                        <Link to="/my_recipes">
                            <Tooltip title="My Recipes" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={MyRecipes} width="40px" />
                                </Button>
                            </Tooltip>
                        </Link>
                        <Link to="/recipes">
                            <Tooltip title="Find new recipe quests" arrow>
                                <Button sx={{ mr: 5 }}>
                                    <img src={SearchIcon} width="50px" />
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