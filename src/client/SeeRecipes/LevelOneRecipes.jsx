import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelOneRecipesQuery } from "../../redux/api"

import Coin from "./Coin.png"
import LevelOneCard from "./LevelOneCard.png"
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
            <Box
                sx={{ mx: "6%", mt: 10, p: 5 }}
                style={{
                    backgroundImage: `url(${LevelOneCard})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}>
                <Typography variant="h3" sx={{ color: "#445D48", textAlign: "center", mb: 5 }}>
                    Level One Recipes
                </Typography>
                <Stack direction="row">
                    {data && data.map((recipes) => (
                        <Link to={`/recipe/${recipes.id}`} style={{ textDecoration: 'none' }}>
                            <Tooltip title="Click to see full recipe">
                                <Box
                                    sx={{ ml: "10%", mb: 15 }}
                                    style={{
                                        backgroundImage: `url(${Coin})`,
                                        width: "160px",
                                        height: "160px",
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
                        </Link>
                    ))
                    }
                </Stack>
            </Box>
        </div >
    )
}
export default LevelOneRecipes