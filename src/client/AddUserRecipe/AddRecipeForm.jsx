import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import { motion } from "framer-motion";

import { usePostUserRecipeMutation } from "../../redux/api";
import AddIngredientsForm from "./AddIngredientsForm";
import AddInstructionsForm from "./AddInstructionsForm";
import DisplayAddedRecipe from "./DisplayAddedRecipe";


const AddRecipeForm = () => {
    const [postRecipe] = usePostUserRecipeMutation();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [postedRecipeId, setPostedRecipeId] = useState(null);
    const [showAdded, setShowAdded] = useState(false)
    const [showDescription, setShowDescription] = useState(true);
    const [showIngredientsAndInstructions, setShowIngredientsAndInstructions] = useState(false);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const result = await postRecipe({ name, image, description })
            setPostedRecipeId(result.data.newRecipe.id)
            console.log(result.data.newRecipe.name)
            console.log(postedRecipeId);
            setShowDescription(false);
            setShowAdded(true);
            setShowIngredientsAndInstructions(true);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box sx={{ mt: "10%", mx: 15,  backgroundColor: "#F1E4C3", px: 2, py: 1, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
            {showAdded &&
                    <div>
                        <DisplayAddedRecipe id={postedRecipeId} />
                    </div>
                }
                {showDescription &&
                    <Box sx={{ p: 3, m: 3, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                        <Typography
                            variant="h5"
                            sx={{ m: 1, textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                            Add Recipe Name and Description
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
                                        mx: "35%",
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
                    </Box>}

                {showIngredientsAndInstructions &&
                   <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, ease: "easeIn" }}>
                        <AddIngredientsForm id={postedRecipeId} />
                        <AddInstructionsForm id={postedRecipeId} />
                    </motion.div>
                }
            </Box>
        </div>
    )
}
export default AddRecipeForm