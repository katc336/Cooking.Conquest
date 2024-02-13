import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid  from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography  from "@mui/material/Typography"

import { Link } from "react-router-dom";

import Logo from "./images/Logo.png"
import HomeScroll from "./images/HomeScroll.png"
import CookingConquestInfo from "../InformationPage/Web/CookingConquestInfoPage";
const WebHomePage = () => {

    return (
        <div>
            <Grid container sx={{ mt: 10 }}>
                <Grid item xs={5}>
                    <Box sx={{ ml: 3 }}>
                        <Box sx={{ mt: 5, ml: 25 }}>
                            <img
                                src={HomeScroll}
                                alt="Cooking Conquest Chef"
                                width="1200px"
                                style={{ position: "absolute", zIndex: -1 }} />
                        </Box>
                        <img
                            src={Logo}
                            alt="Cooking Conquest Chefs"
                            width="620px" />

                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ p: 3, mt: 20, mr: 18, ml: 1 }}>
                        <Typography
                            variant="h3"
                            sx={{ color: "#445D48", mb: 2 }}>
                            Welcome to Cooking Conquest!
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ color: "#445D48", mb: 2 }}>
                            The free, fun way to level up and conquer your vegetarian kitchen!
                        </Typography>
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
                                        backgroundColor: "transparent",
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
                </Grid>
            </Grid>
            <CookingConquestInfo />
        </div>
    )
}
export default WebHomePage