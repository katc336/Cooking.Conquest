import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom";

import { useGetUserQuery } from "../../../redux/api";

import RecipeSpellBook from "./images/RecipeSpellBook.png"

import LevelOneUserDisplay from "./Level1/LevelOneUserDisplay";
import LevelTwoUserDisplay from "./Level2/LevelTwoUserDisplay";
import UsersRecipes from "./UsersRecipes";
import LevelThreeUserDisplay from "./Level3/LevelThreeUserDisplay";
import MaxLevelUserDisplay from "./MaxLevel/MaxLevelUserDisplay";
import AskForHelpWizard from "./AskForHelp/AskForHelpWizard";
import GuildHelpWizard from "./AskForHelp/GuildHelpWizard";

const WebUserDashboard = () => {
    const { data, error, isLoading } = useGetUserQuery();

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
                <Grid container sx={{ mt: 1 }}>
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
                            : //if not level 4, return empty <div>
                            <div />}
                    </Grid>
                    <Grid item xs={9}>
                        {data.level === 4
                            ? //if max level return...
                            <div>
                                <GuildHelpWizard />
                                <Box
                                    sx={{ pb: 70, mb: 20 }}
                                    style={{
                                        backgroundImage: `url(${RecipeSpellBook})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    <Typography sx={{ textAlign: "center" }}>
                                        <Link to="/my_recipes">
                                            <Button
                                                variant="contained"
                                                color="success"
                                                sx={{
                                                    mt: 30,
                                                    p: 1,
                                                    fontSize: "30px",
                                                    color: "white",
                                                    borderRadius: "10px",
                                                    backgroundColor: "#65B741",
                                                    border: 2,
                                                    borderBottom: 5,
                                                    borderColor: "#445D48",
                                                    textTransform: "none"
                                                }}>
                                                Go to your Recipe Spell Book to add recipes
                                            </Button>
                                        </Link>
                                    </Typography>
                                </Box>
                            </div>
                            : //if not level 4...
                            <div>
                                <AskForHelpWizard />
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
                            </div>}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default WebUserDashboard