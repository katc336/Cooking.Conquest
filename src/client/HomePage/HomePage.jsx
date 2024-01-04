import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useMediaQuery, useTheme } from "@mui/material";

import { Link } from "react-router-dom";

import characterImg from "./homePageCharacter.png"
import NavBar from "../NavigationBar/NavBar";
import Description from "./Description";
const HomePage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            {isMobile
                ?
                //TO DO
                <div>
                </div>
                :
                <div>
                    <Grid container sx={{ mt: 10 }}>
                        <Grid item xs={6}>
                            <Box sx={{ mt: 5 }}>
                                <img
                                    src={characterImg}
                                    alt="Cooking Conquest Chef"
                                    width="850px" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ backgroundColor: "rgba(223, 233, 228, 1)", p: 3,  border: 2, borderColor:"#445D48", borderBottom: 5, borderRadius: "20px", mt: 40, ml: 15, mr: 5 }}>
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
                                                fontFamily: "Tahoma",
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
                                                fontFamily: "Tahoma",
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
                   <Description/>
                </div>}
        </div>
    )
}
export default HomePage