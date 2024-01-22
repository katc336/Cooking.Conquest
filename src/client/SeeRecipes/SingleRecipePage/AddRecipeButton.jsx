import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import Snackbar from '@mui/material/Snackbar';

import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, usePostRecipeToUserMutation, useGetSingleRecipeQuery } from "../../../redux/api";

const AddRecipeButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    const { id } = useParams();
    const { data: recipeData, error: recipeError, isLoading: recipeIsLoading } = useGetSingleRecipeQuery(id);
    const [postRecipe] = usePostRecipeToUserMutation();
    const navigate = useNavigate();

    if (isLoading) {
        console.log("Loading...");
        return null;
    }
    if (recipeError) {
        return <>{error}</>;
    }

    const checkIfAdded = data && data.recipeBookItems.some((item) => item.recipeId === recipeData.id);

    const handlePost = async (event) => {
        try {
            event.preventDefault();
            const result = await postRecipe({ recipeId: recipeData.id });
            console.log("Success!");
            console.log(result);
            navigate("/account");
        } catch (error) {
            return error.message;
        }
    };

    return (
        <div>
            {data && data.level !== 4
                ? //If the user is not level 4 and does not already have the recipe added, return the button
                <div>
                    {checkIfAdded === true
                        ? //if the user already has this recipe...
                        <div>
                            <Box sx={{ mt: 3, border: 5, borderColor: "#862B0D", borderRadius: "20px", backgroundColor: "#FFF9C9", mx: 18, p: 1 }}>
                                <Typography sx={{ textAlign: "center", color: "#862B0D", fontWeight: "bold" }}>
                                    This recipe is already added to your recipe spellbook
                                </Typography>
                            </Box>
                        </div>
                        : // if this user does not have this recipe added...
                        <div>
                            <Typography sx={{ textAlign: "center" }}>
                                <Button
                                    onClick={(event) => handlePost(event)}
                                    variant="contained"
                                    color="success"
                                    sx={{
                                        mx: 1,
                                        mt: 1,
                                        color: "white",
                                        borderRadius: "10px",
                                        backgroundColor: "#65B741",
                                        border: 2,
                                        borderBottom: 5,
                                        borderColor: "#445D48",
                                        textTransform: "none",
                                    }} >
                                    Add Recipe to My Recipe Book
                                </Button>
                            </Typography>
                        </div>
                    }
                </div>
                : // if not a user, return an empty div
                <div />
            }
        </div>
    );
};
export default AddRecipeButton;
