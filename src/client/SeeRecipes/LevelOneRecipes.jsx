import { Box, Button, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelOneRecipesQuery } from "../../redux/api"

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

            <Box sx={{ mx: "10%" }}>
                <Typography variant="h3" sx={{ color: "#445D48", fontFamily: "Marker Felt, fantasy", textAlign: "center", my: 3 }}>
                    Level One Recipes
                </Typography>
                <Stack direction="row">
                    {data && data.map((recipes) => (
                        <Link to={`/recipe/${recipes.id}`} style={{ textDecoration: 'none' }}>
                            <Tooltip title="Click to see full recipe">
                                <Card
                                    key={recipes.id}
                                    sx={{
                                        minWidth: "180px",
                                        m: 1, p: 2,
                                        backgroundColor: "#FFF47D", 
                                        border: 1, 
                                        borderBottom: 10, 
                                        borderRadius: "100%", 
                                        borderColor: "#FED049"
                                    }}>
                                    <Stack direction="column">
                                        <Typography variant="h5" sx={{ textAlign: "center", color: "#445D48" }}>
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
export default LevelOneRecipes