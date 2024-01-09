import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetUserQuery, useGetLevelThreeRecipesQuery } from "../../redux/api"

import NoUserRecipeView from "./NoUserRecipeView"
import RecipeCircle from "./RecipeCircle.png"

const LevelThreeRecipes = () => {
    const { data, error, isLoading } = useGetLevelThreeRecipesQuery();
    const { data: userData, error: userError, isLoading: userIsLoading } = useGetUserQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            {!userData || userData.level !== 3
                ? //if no user or not a high enough level...
                <div>
                    <Stack direction="column">
                        <Typography
                            variant="h5"
                            sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                            Level three quests are locked!
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                            Sign up or level up to unlock level three recipes!
                        </Typography>
                    </Stack>
                    <NoUserRecipeView />
                </div>
                : //if user...
                <div>
                    <Box sx={{ ml: 3, px: "10%", backgroundColor: "transparent" }}>
                        <Typography
                            variant="h5"
                            sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                            Level Three:
                        </Typography>
                        <Stack direction="row" useFlexGap flexWrap="wrap">
                            {data && data.map((recipes) => (
                                <Tooltip title="Click to see recipe details">
                                    <Box
                                        sx={{ my: 5 }}
                                        style={{
                                            backgroundImage: `url(${RecipeCircle})`,
                                            width: "150px",
                                            height: "150px",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                        }}>
                                        <Stack direction="column">
                                            <Typography sx={{ mt: "30%", mx: "20%", fontWeight: "bold", textAlign: "center", color: "#935900" }}>
                                                {recipes.name}
                                            </Typography>
                                            <Typography sx={{ textAlign: "center" }}>
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Tooltip>
                            ))
                            }
                        </Stack>
                    </Box>
                </div>}
        </div >
    )
}
export default LevelThreeRecipes