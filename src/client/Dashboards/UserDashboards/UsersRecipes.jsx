import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useGetRecipeBookItemQuery, usePatchCompletedRecipeMutation } from "../../../redux/api";
import AddRecipe from "./MaxLevel/AddUserRecipeForms/AddRecipes";

const UsersRecipes = () => {
    const { data, error, isLoading } = useGetRecipeBookItemQuery();
    const { id } = useParams();
    const [patchRecipe] = usePatchCompletedRecipeMutation(id);
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
    const handlePatch = async (recipeId) => {
        try {
            const result = await patchRecipe({ id: recipeId, completed: true });
            console.log("Patch result:", result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {data && data.length > 0
                ? // If there are recipe book items...
                <div>
                    <Stack direction="column">
                        <Box sx={{ mt: "10%", mx: "20%" }}>
                            {data.map((recipeBookItem) => (
                                <div key={recipeBookItem.id}>
                                    {recipeBookItem.completed === false
                                        ? //If the recipe is incomplete...
                                        <div>
                                            <Box sx={{ backgroundColor: "#F1E4C3", px: 2, my: 1, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                                                <Stack direction="row">
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ color: "#362706", pt: 2, mx: 2 }}>
                                                        {recipeBookItem.recipe.name}
                                                    </Typography>
                                                    <Link to={`/recipe/${recipeBookItem.recipe.id}`}>
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
                                                    </Link>
                                                    <Button
                                                        onClick={() => handlePatch(recipeBookItem.id)}
                                                        sx={{
                                                            m: 1,
                                                            color: "white",
                                                            borderRadius: "10px",
                                                            backgroundColor: "#65B741",
                                                            border: 2,
                                                            borderBottom: 5,
                                                            borderColor: "#445D48",
                                                            textTransform: "none"
                                                        }}>
                                                        Mark as Completed
                                                    </Button>
                                                </Stack>
                                            </Box>
                                        </div>
                                        : //If the recipe is completed return an empty div
                                        <div />
                                    }
                                </div>
                            ))}
                        </Box>
                    </Stack>
                </div>
                : //If there are no recipe book items..
                <Box sx={{ mt: "20%", mx: "10%", p: 3, backgroundColor: "rgba(223, 233, 228, 1)", border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", color: "#362706" }}>
                        Want to find recipes to start a cooking quest?
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        <Link to="/recipes">
                            <Button
                                sx={{
                                    m: 1,
                                    fontSize: "20px",
                                    color: "white",
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                    textTransform: "none"
                                }}
                            >
                                Click here to explore new recipes!
                            </Button>
                        </Link>
                    </Typography>
                </Box>
            }
            <AddRecipe />
        </div>
    );
};

export default UsersRecipes;
