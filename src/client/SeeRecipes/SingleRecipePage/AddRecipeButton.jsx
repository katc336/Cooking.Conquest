import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, usePostRecipeToUserMutation, useGetSingleRecipeQuery } from "../../../redux/api";

const AddRecipeButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    const { id } = useParams();
    const { data: recipeData, error: recipeError, isLoading: recipeIsLoading } = useGetSingleRecipeQuery(id);
    const [postRecipe, { data: mutationData, isError: isMutationError, isLoading: isMutationLoading, }] = usePostRecipeToUserMutation();
    const navigate = useNavigate();

    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data);
    }
    if (recipeData) {
        console.log(recipeData);
    }
    if (recipeError) {
        return <>{error}</>
    }
    const handlePost = async (event) => {
        try {
            event.preventDefault();
            const result = await postRecipe({ recipeId: recipeData.id })
            console.log("Success!")
            console.log(result)
            navigate("/account");
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            {data 
                ? //if there's a user...
                <div>
                    {data.level === 4 
                    ? 
                    <div/> 
                    : 
                    <div> 
                         <Typography sx={{ textAlign: "center" }}>
                        <Button
                            onClick={() => handlePost(event)}
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
                                textTransform: "none"
                            }}>
                            Add Recipe to My Recipe Book
                        </Button>
                    </Typography>
                        </div>}
                </div>
                : //if not a user, return an empty div
                <div>
                </div>
                }
        </div>
    )
}
export default AddRecipeButton