import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelOneRecipesQuery } from "../../../../redux/api"

import RecipeBorder from "../images/RecipeBorder.png"

const LevelOneRecipes = () => {
    const { data, error, isLoading } = useGetLevelOneRecipesQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            <Box sx={{ px: "7%", backgroundColor: "transparent" }}>
                <Typography
                    variant="h5"
                    sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Level One:
                </Typography>
                <Stack direction="row" useFlexGap flexWrap="wrap">
                    {data && data.map((recipes) => (
                        <div key={recipes.id}>
                            <Tooltip title="Click to see recipe details">
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/recipe/${recipes.id}`}>
                                    <Box
                                        sx={{ m: 1, p: 3, pb: 5 }}
                                        style={{
                                            backgroundImage: `url(${RecipeBorder})`,
                                            width: "150px",
                                            height: "150px",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                        }}>
                                        <Stack direction="column">
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: "bold", textAlign: "center", color: "#362706", p: 1 }}>
                                                {recipes.name}
                                            </Typography>
                                            <Typography sx={{ textAlign: "center" }}>
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Link>
                            </Tooltip>
                        </div>
                    ))
                    }
                </Stack>
            </Box>
        </div >
    )
}
export default LevelOneRecipes