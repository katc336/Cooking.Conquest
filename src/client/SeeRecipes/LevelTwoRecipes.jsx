import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelTwoRecipesQuery } from "../../redux/api"

import RecipeCircle from "./RecipeCircle.png"

const LevelTwoRecipes = () => {
    const { data, error, isLoading } = useGetLevelTwoRecipesQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            <Box sx={{ ml: 3, px: "10%", backgroundColor: "transparent" }}>
                <Typography
                    variant="h5"
                    sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Level Two:
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
        </div >
    )
}
export default LevelTwoRecipes