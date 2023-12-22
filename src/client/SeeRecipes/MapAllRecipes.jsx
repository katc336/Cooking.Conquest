import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useGetAllRecipesQuery } from "../../redux/api"

import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const MapAllRecipes = () => {
    const { data, error, isLoading } = useGetAllRecipesQuery();
    if (isLoading) {
        console.log("Loading...")
    }
    if (data) {
        console.log("Data")
    }
    return (
        <>
            <Typography
                variant="h3"
                sx={{ textAlign: "center" }}>
                All Recipes
            </Typography>
            <div>
                <Box>
                    <Stack
                        direction="row"
                        style={{ overflowX: "scroll" }}>
                        {data && data.map((recipes) => (
                            <Card
                                key={recipes.id}
                                sx={{
                                    borderRadius: "10px",
                                    border: 1,
                                    borderColor: "#FFEBD8",
                                    backgroundColor: "transparent",
                                    m: 1, p: 2,
                                    minWidth: "500px"
                                }}>
                                <Stack direction="column">
                                    <Typography variant="h5" sx={{ textAlign: "center", color: "#445D48" }}>
                                        {recipes.name}
                                    </Typography>
                                    <Box sx={{ p: 1 }}>
                                        <img
                                            src={recipes.image}
                                            width="300" />
                                        <Typography variant="h6" sx={{ color: "#445D48" }}>
                                            {recipes.description}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ color: "#445D48" }}>
                                        {recipes.level}
                                    </Typography>
                                    <Typography sx={{ textAlign: "center" }}>
                                        <Link to={`/recipe/${recipes.id}`}>
                                            <Button
                                                sx={{
                                                    m: 1,
                                                    width: "300px",
                                                    fontSize: "16px",
                                                    fontFamily: "Tahoma",
                                                    color: "#445D48",
                                                    borderRadius: "10px",
                                                    backgroundColor: "transparent",
                                                    border: 2,
                                                    borderBottom: 5,
                                                    borderColor: "#E4E9BE",
                                                    textTransform: "none"
                                                }}>
                                                See Full Recipe
                                            </Button>
                                        </Link>
                                    </Typography>
                                </Stack>
                            </Card>
                        ))
                        }
                    </Stack>
                </Box>
            </div>
        </>
    )
}
export default MapAllRecipes


