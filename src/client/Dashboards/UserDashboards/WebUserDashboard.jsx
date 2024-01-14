import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../redux/api";

import RecipeSpellBook from "./images/RecipeSpellBook.png"
import WizardGastronomer from "./images/WizardGastronomer.png"

import LevelOneUserDisplay from "./Level1/LevelOneUserDisplay";
import LevelTwoUserDisplay from "./Level2/LevelTwoUserDisplay";
import UsersRecipes from "./UsersRecipes";
import LevelThreeUserDisplay from "./Level3/LevelThreeUserDisplay";
import MaxLevelUserDisplay from "./MaxLevel/MaxLevelUserDisplay";

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
                <Grid container sx={{ mt: 1}}>
                    <Grid item xs={3}>
                        {data.level === 1
                            ? //if level 1 return level 1 image...
                            <div>
                                <LevelOneUserDisplay />
                            </div>
                            : //if not level 1, return empty <div>
                            <div />}
                        {data.level === 2
                            ? //if level 2 return level 2 image...
                            <div>
                                <LevelTwoUserDisplay />
                            </div>
                            : //if not level 2, return empty <div>
                            <div />}
                        {data.level === 3
                            ? //if level 3 return level 3 image...
                            <div>
                                <LevelThreeUserDisplay />
                            </div>
                            : //if not level 1, return empty <div>
                            <div />}
                        {data.level === 4
                            ? //if max level return max level image...
                            <div>
                                <MaxLevelUserDisplay />
                            </div>
                            : //if not level 1, return empty <div>
                            <div />}
                    </Grid>
                    <Grid item xs={9}>
                        <Box sx={{ ml: "40%", mr: "8%", mt: 10, }}>
                            <img
                                src={WizardGastronomer}
                                style={{ position: "absolute", zIndex: -1 }}
                                width="670px" />
                            <Box sx={{ pt: "20%", pr: "37%", pl: "10%" }}>
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#445D48", textAlign: "center" }}>
                                    Don't know how Cooking Conquest works?
                                </Typography>
                                <Typography sx={{ mt: 1, textAlign: "center" }}>
                                    <Link to="/information">
                                        <Button
                                            sx={{ color: "white", borderRadius: "10px", backgroundColor: "#65B741", border: 2, borderBottom: 5, borderColor: "#445D48", textTransform: "none" }}>
                                            Ask for Help
                                        </Button>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{ pb: 70, mb: 20 }}
                            style={{
                                backgroundImage: `url(${RecipeSpellBook})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}>
                            <Typography
                                variant="h3"
                                sx={{ pt: 5, pl: "25%", color: "#445D48" }}>
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