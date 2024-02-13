import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom";

import Logo from "./images/Logo.png"
import HomeScroll from "./images/HomeScroll.png"
import CookingConquestInfo from "../InformationPage/Web/CookingConquestInfoPage";
const MobileHomePage = () => {

    return (
        <div>
            <Box sx={{ ml: 5, mt: 1 }}>
                <img
                    src={Logo}
                    alt="Cooking Conquest Chefs"
                    width="250px" />
            </Box>
            <Box sx={{ p: 1 }}>
                <Box sx={{ mt: 1 }}>
                    <img
                        src={HomeScroll}
                        alt="Cooking Conquest Chef"
                        width="330px"
                        style={{ position: "absolute", zIndex: -1 }} />
                </Box>
                <Box sx={{ px: 3, py: 3 }}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#445D48", mb: 2 }}>
                        Welcome to Cooking Conquest!
                    </Typography>
                    <Typography
                        sx={{ color: "#445D48", mb: 2 }}>
                        The free, fun way to level up and conquer your vegetarian kitchen!
                    </Typography>
                </Box>
                <Stack direction="column">
                    <Link to="/register">
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                m: 1,
                                width: "300px",
                                fontSize: "20px",
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            sx={{
                                m: 1,
                                width: "300px",
                                fontSize: "16px",
                                color: "#445D48",
                                borderRadius: "10px",
                                backgroundColor: "#F4F9F4",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "rgba(80, 125, 106, 1)",
                                textTransform: "none"
                            }}>
                            I already have an account
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </div>
    )
}
export default MobileHomePage