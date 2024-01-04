import { useState } from "react";
import { Box, Button, Grid, Stack, Tooltip, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import { useGetUserQuery, useGetAllRecipesQuery } from "../../redux/api";

import LevelCard from "./LevelCard.png"
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
                        backgroundSize: "contain",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h2"
                        sx={{ textAlign: "center", color: "rgba(223, 233, 228, 1)", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <Box sx={{ pt: "10%", px: 10 }}>
                        <Stack direction="row">
                            <Box
                                sx={{ my: 7 }}
                                style={{
                                    width: "33%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    pb: 25
                                }}>
                                <LevelOneRecipes />
                            </Box>
                            <Box
                                sx={{ my: 7 }}
                                style={{
                                    width: "33%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelTwoRecipes />
                            </Box>
                            <Box
                                sx={{ my: 7 }}
                                style={{
                                    width: "33%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "cover",
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


