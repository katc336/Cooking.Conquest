import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../redux/api";
import MobileUserDashboard from "./MobileUserDashboard";
import MyPath from "./MyPath";
import SearchIcon from "./SearchIcon.png"
import MyRecipes from "./MyRecipes.png"


const UserDashboard = () => {
    const { data, error, isLoading } = useGetUserQuery();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }

    return (
        <>
            {isMobile
                ?
                <div>
                    <MobileUserDashboard />
                </div>
                ://If not mobile...
                <div>
                    <Grid container sx={{ mt: 10 }}>
                        <Grid item xs={2}>
                            <Stack direction="column">
                                <Button sx={{
                                    my: 3,
                                    fontFamily: "Marker Felt, fantasy",
                                    fontSize: "20px",
                                    textTransform: "none",
                                    color: "green"
                                }}>
                                    <img src={SearchIcon} width="70px"/>
                                    Find New Recipe Quests
                                </Button>
                                <Button sx={{
                                    my: 3,
                                    fontFamily: "Marker Felt, fantasy",
                                    fontSize: "20px",
                                    textTransform: "none",
                                    color: "green",
                                }}>
                                     <img src={MyRecipes} width="50px"/>
                                    My Cooking Quests
                                </Button>
                                <Button sx={{
                                    my: 3,
                                    fontFamily: "Marker Felt, fantasy",
                                    fontSize: "20px",
                                    textTransform: "none",
                                    color: "green"
                                }}>
                                    My Account
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={10}>
                            <Box sx={{ mx: 10 }}>
                                <Typography
                                    variant="h3"
                                    sx={{ fontFamily: "Marker Felt, fantasy", color: "#445D48" }}>
                                    Hello {data.name}, Welcome back to your cooking journey!
                                </Typography>
                                <Box sx={{ my: 3, p: 5 }}>
                                    <Card sx={{ p: 3, backgroundColor: "#65B741" }}>
                                        {data.level === 1 ? <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>Level 1</Typography> : <div> </div>}
                                        {data.level === 2 ? <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>Level 2</Typography> : <div> </div>}
                                        {data.level === 3 ? <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>Level 3</Typography> : <div> </div>}
                                    </Card>
                                   <MyPath/>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </div>}
        </>
    )
}
export default UserDashboard