import Button from "@mui/material/Button";
import Typography  from "@mui/material/Typography";

import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useGetUserQuery, usePostRecipeToUserMutation, useGetSingleRecipeQuery } from "../../../redux/api";

const AddRecipeButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    const { id } = useParams();
    const { data: recipeData, error: recipeError, isLoading: recipeIsLoading } = useGetSingleRecipeQuery(id);
    const [postRecipe, { data: mutationData, isError: isMutationError, isLoading: isMutationLoading, }] = usePostRecipeToUserMutation();
    if (data) {
        console.log(data)
    }
    if (!data) {
        console.log("No logged in user")
    }
    if (error) {
        console.log({ error })
    }
    if (!recipeData) {
        console.log("No recipe data")
    }

    const navigate = useNavigate ();
    const handlePost = async (event) => {
        try {
            event.preventDefault();
            const result = await postRecipe({ recipeId: recipeData.id })
            console.log("Success!")
            console.log(result)
            // navigate("/account");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            {data
                ? //if there's a user...
                <div>
                    <Typography sx={{ textAlign: "center" }}>
                        <Button 
                        onClick={() => handlePost(event) }
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
                        }}>
                            Add Recipe to My Recipe Book
                        </Button>
                    </Typography>
                </div>
                : //if not a user, return an empty div
                <div>
                </div>}
        </div>
    )
}
export default AddRecipeButton