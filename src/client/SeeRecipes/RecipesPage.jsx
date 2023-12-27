import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import { useGetUserQuery } from "../../redux/api";

import LevelOneRecipes from "./LevelOneRecipes";
import LevelTwoRecipes from "./LevelTwoRecipes";
import LevelThreeRecipes from "./LevelThreeRecipes";

import LevelCard from "./LevelCard.png"
import Scroll from "./Scroll.png"
import LockedRecipeIcon from "./LockedRecipeIcon.png"
import NoUserRecipeView from "./NoUserRecipeView";

const RecipesPage = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>

            <Stack direction="row">
                <Box
                    sx={{ mt: 10, p: 5, pb: 100 }}
                    style={{
                        width: "40%",
                        backgroundImage: `url(${Scroll})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h3"
                        sx={{ pt: 8, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <LevelOneRecipes />
                    {!data
                        ? //if no user...
                        <div>
                            <NoUserRecipeView/>
                        </div>
                        : //if user...
                        <div>

                        </div>}
                </Box>
                <Box
                    sx={{ mt: 10 }}
                    style={{
                        backgroundImage: `url(${LevelCard})`,
                        width: "60%",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    Placeholder
                </Box>
            </Stack>

        </div >

    )
}
export default RecipesPage


