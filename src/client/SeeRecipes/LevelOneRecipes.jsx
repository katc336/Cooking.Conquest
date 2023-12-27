import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelOneRecipesQuery } from "../../redux/api"

import Coin from "./Coin.png"

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
            <Box sx={{ mt: 10, p: 3, border: 5, backgroundColor: "#FBF6EE", borderColor: "#AFC8AD", borderRadius: "10px", mx: "5%" }}>
                <Typography variant="h4" sx={{ color: "#445D48", textAlign: "center", my: 3 }}>
                    Level One Recipes
                </Typography>
                <Stack direction="row">
                    {data && data.map((recipes) => (
                        <Link to={`/recipe/${recipes.id}`} style={{ textDecoration: 'none' }}>
                            <Tooltip title="Click to see full recipe">

                                <Box
                                    sx={{ ml: 1 }}
                                    style={{
                                        backgroundImage: `url(${Coin})`, 
                                        width: "200px",
                                        height: "200px",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    <Stack direction="column">
                                        <Typography sx={{ mt: "40%", mx: "20%", fontWeight: "bold", textAlign: "center", color: "#935900" }}>
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