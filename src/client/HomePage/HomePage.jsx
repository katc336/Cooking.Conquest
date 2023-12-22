import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useMediaQuery, useTheme } from "@mui/material";

import { Link } from "react-router-dom";

import characterImg from "./homePageCharacter.png"
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
                    <Grid container>
                        <Grid item xs={6}>
                            <Box sx={{ mt: 5 }}>
                                <img
                                    src={characterImg}
                                    alt="Cooking Conquest Chef"
                                    width="900px" />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ mt: 40, mx: 10 }}>
                                <Typography
                                    variant="h5"
                                    sx={{ fontFamily: "Tahoma" }}>
                                    The free, fun way to level up your cooking skills!
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontFamily: "Tahoma" }}>
                                    Put on your apron, and get ready to conquer cooking!
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
                                                borderColor: "#E4E9BE",
                                                textTransform: "none"
                                            }}>
                                            I already have an account
                                        </Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Grid>

                    </Grid>
                </div>}
        </div>
    )
}
export default HomePage