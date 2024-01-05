import { useState } from "react";
import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import { useGetUserQuery, useGetAllRecipesQuery } from "../../redux/api";

import Scroll from "./Scroll.png"
import RecipeCard from "./RecipeCardBackground.png"
import RecipeCircle from "./RecipeCircle.png"
import NoUserRecipeView from "./NoUserRecipeView";
import LevelOneRecipes from "./LevelOneRecipes";
import LevelTwoRecipes from "./LevelTwoRecipes";
import LevelThreeRecipes from "./LevelThreeRecipes";

const RecipesPage = () => {
    const [viewRecipe, setViewRecipe] = useState(null);
    const { data, error, isLoading } = useGetUserQuery();
    const { data: recipeData, error: recipeError, isLoading: recipeIsLoading } = useGetAllRecipesQuery();

    const handleRecipeClick = (id) => {
        setSelectedRecipeId(id);
    };

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
                    sx={{ mx: 5, mt: 7, pt: 2, pb: 50 }}
                    style={{
                        backgroundImage: `url(${RecipeCard})`,
                        backgroundSize: "cover",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h2"
                        sx={{ textAlign: "center", color: "rgba(223, 233, 228, 1)", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <Box sx={{ pt: "20%", px: 10 }}>
                        <Stack direction="column">
                            <Box
                                sx={{ pb: 20 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelOneRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 20 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelTwoRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 20 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelThreeRecipes />
                            </Box>
                        </Stack>
                    </Box>
                    {/* {!data
                        ? //if no user...
                        <div>
                            <NoUserRecipeView />
                        </div>
                        : //if user...
                        <div>

                        </div>} */}
                </Box>
            </Stack>
        </div >
    )
}
export default RecipesPage


