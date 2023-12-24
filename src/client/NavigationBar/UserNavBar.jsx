import Box from "@mui/material/Box";
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
            <Box sx={{ ml: "70%", borderRight: 3, borderColor: "#F2F4D1" }}>
                <Stack direction="row">
                    <Link to="/recipes">
                        <Tooltip title="Find new recipe quests" arrow>
                            <Button sx={{ m: 3, textTransform: "none", color: "green" }}>
                                <img src={SearchIcon} width="50px" />
                            </Button>
                        </Tooltip>
                    </Link>
                    <Tooltip title="My Recipes" arrow>
                        <Button sx={{ m: 3, textTransform: "none", color: "green", }}>
                            <img src={MyRecipes} width="40px" />
                        </Button>
                    </Tooltip>
                    <Link to="/account">
                        <Tooltip title="My Account" arrow>
                            <Button sx={{ m: 3, textTransform: "none", color: "green" }}>
                                <img src={MyAccount} width="40px" />
                            </Button>
                        </Tooltip>
                    </Link>
                </Stack>
            </Box>
        </div>
    )
}
export default UserNavBar