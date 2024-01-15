import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { useState } from "react";

import { usePostUserRecipeMutation } from "../../../../../redux/api";
import AddIngredientsForm from "./AddIngredientsForm";


const AddRecipeForm = () => {
    const [postRecipe] = usePostUserRecipeMutation();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [postedRecipeId, setPostedRecipeId] = useState(null);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const result = await postRecipe({ name, image, description })
            console.log(result.data.newRecipe.name)
            setPostedRecipeId(result.data.newRecipe.id)
            console.log(postedRecipeId);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box sx={{ mx: "10%", backgroundColor: "#F1E4C3", px: 2, py: 1, my: 1, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                <Typography
                    variant="h4"
                    sx={{ m: 1, textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                    You can now add recipes and help your guild!
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                    <Link to="/leadership_board">
                        <Button
                            sx={{
                                color: "#362706",
                                borderRadius: "10px",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Learn more about how your recipes can help in the Guild Competition
                        </Button>
                    </Link>
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Stack direction="column">
                        <TextField
                            label="Recipe's Name"
                            size="small"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required={true}
                            sx={{ m: 1 }}>
                        </TextField>
                        <TextField
                            label="Image URL"
                            size="small"
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                            required={true}
                            sx={{ m: 1 }}>
                        </TextField>
                        <TextField
                            label="Recipe's Description"
                            size="small"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            required={true}
                            sx={{ m: 1 }}>
                        </TextField>
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            sx={{
                                p: 1,
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Add Recipe Name and Description
                        </Button>
                    </Stack>
                </form>
                <AddIngredientsForm
                    id={postedRecipeId} />
            </Box>
        </div>
    )
}
export default AddRecipeForm