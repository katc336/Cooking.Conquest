
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

import { useGetRecipeBookItemQuery } from "../../redux/api";

const MyCompletedRecipes = () => {
    const { data, error, isLoading } = useGetRecipeBookItemQuery();

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            <div>
                <Box>
                    <Stack direction="column">
                            <Typography
                                variant="h4"
                                sx={{ textAlign: "center", color: "#362706", pt: 2, mx: 2, mt: 67}}>
                                Recipes I Conquered:
                            </Typography>
                            {data.map((recipeBookItem) => (
                                <div key={recipeBookItem.id}>
                                    {recipeBookItem.completed === true
                                        ? //If the recipe is complete...
                                        <div>
                                            <Box sx={{ backgroundColor: "#F8FAE5", my: 1, mx: 20, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                                                <Stack direction="row">
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                                                        {recipeBookItem.recipe.name}
                                                    </Typography>
                                                    <Link to={`/recipe/${recipeBookItem.recipe.id}`}>
                                                        <Typography sx={{ textAlign: "center" }}>
                                                            <Button sx={{
                                                                m: 1,
                                                                color: "#445D48",
                                                                borderRadius: "10px",
                                                                border: 2,
                                                                borderBottom: 5,
                                                                borderColor: "#445D48",
                                                                textTransform: "none"
                                                            }}>
                                                                View Recipe
                                                            </Button>
                                                        </Typography>
                                                    </Link>
                                                </Stack>
                                            </Box>
                                        </div>
                                        : //If the recipe is incompleted return an empty div
                                        <div />
                                    }
                                </div>
                            ))}
                    </Stack>
                </Box>
            </div>
        </div>
    );
};

export default MyCompletedRecipes;