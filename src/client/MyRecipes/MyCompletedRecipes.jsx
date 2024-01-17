
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

import { useGetRecipeBookItemQuery } from "../../redux/api";
import AddRecipe from "../AddUserRecipe/AddRecipes";

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
                <Stack direction="column">
                    <Box sx={{ mt: "18%", mx: "20%" }}>
                        <Typography
                            variant="h5"
                            sx={{ textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                            Recipes I Conquered!
                        </Typography>
                        {data.map((recipeBookItem) => (
                            <div key={recipeBookItem.id}>
                                {recipeBookItem.completed === true
                                    ? //If the recipe is complete...
                                    <div>
                                        <Box sx={{ backgroundColor: "#F1E4C3", p: 1, my: 1, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                                            <Stack direction="column">
                                                <Typography
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
                    </Box>
                </Stack>
            </div>
            <AddRecipe />
        </div>
    );
};

export default MyCompletedRecipes;