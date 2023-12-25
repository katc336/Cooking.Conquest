import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelThreeRecipesQuery } from "../../redux/api"

const LevelThreeRecipes = () => {
    const { data, error, isLoading } = useGetLevelThreeRecipesQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            <Box sx={{ mx: "10%" }}>
                <Typography variant="h4" sx={{ color: "#445D48", fontFamily: "Marker Felt, fantasy", textAlign: "center", my: 3 }}>
                    Level Three Recipes
                </Typography>
                <Stack direction="row">
                    {data && data.map((recipes) => (
                        <Link to={`/recipe/${recipes.id}`} style={{ textDecoration: 'none' }}>
                            <Tooltip title="Click to see full recipe">
                                <Card
                                    key={recipes.id}
                                    sx={{
                                        width: "180px",
                                        height: "40px",
                                        m: 1, p: 2,
                                        backgroundColor: "#FFF47D", 
                                        border: 1, 
                                        borderBottom: 10, 
                                        borderRadius: "100%", 
                                        borderColor: "#FED049"
                                    }}>
                                    <Stack direction="column">
                                        <Typography sx={{ textAlign: "center", color: "#445D48" }}>
                                            {recipes.name}
                                        </Typography>
                                        <Typography sx={{ textAlign: "center" }}>
                                        </Typography>
                                    </Stack>
                                </Card>
                            </Tooltip>
                        </Link>
                    ))
                    }
                </Stack>
            </Box>
        </div>
    )
}
export default LevelThreeRecipes