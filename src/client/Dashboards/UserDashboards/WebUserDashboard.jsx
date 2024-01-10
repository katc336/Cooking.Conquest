import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../redux/api";
import RecipeSpellBook from "./images/RecipeSpellBook.png"
import LevelOneUserDisplay from "./Level1/LevelOneUserDisplay";
import LevelTwoUserDisplay from "./Level2/LevelTwoUserDisplay";
import UsersRecipes from "./UsersRecipes";

const WebUserDashboard = () => {
    const { data, error, isLoading } = useGetUserQuery();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }

    return (
        <>
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        {data.level === 1
                            ? //if level one return level one image...
                            <div>
                                <LevelOneUserDisplay />
                            </div>
                            : //if not level 1, return empty <div>
                            <div />}

                        {data.level === 2
                            ? //if level one return level one image...
                            <div>
                                <LevelTwoUserDisplay />
                            </div>
                            : //if not level 1, return empty <div>
                            <div />}
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{ mt: 10, pb: 70, mb: 20 }}
                            style={{
                                backgroundImage: `url(${RecipeSpellBook})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}>
                            <Typography
                                variant="h3"
                                sx={{ pt: 5, pl: 50, color: "#445D48" }}>
                                Hello {data.name}
                            </Typography>
                            <UsersRecipes />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default WebUserDashboard