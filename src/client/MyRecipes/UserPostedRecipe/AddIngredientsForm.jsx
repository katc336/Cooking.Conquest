import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import { usePostUserRecipeIngredientsMutation } from "../../../redux/api"

const AddIngredientsForm = ({ id }) => {
    const [quantity, setQuantity] = useState("");
    const [name, setName] = useState("");

    const [postIngredients] = usePostUserRecipeIngredientsMutation();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const result = await postIngredients({ quantity, name, userPostedRecipeId: id })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box sx={{ p: 3, m: 3, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                <Typography
                    variant="h5"
                    sx={{ m: 1, textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                    What Ingredients Need to be Gathered?
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Amount"
                        size="small"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        required={true}
                        sx={{ m: 1 }}>
                    </TextField>
                    <TextField
                        label="Ingredient Name"
                        size="small"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required={true}
                        sx={{ m: 1, minWidth: "400px" }}>
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
                        Add Ingredient
                    </Button>
                </form>
            </Box>
        </div>
    )
}
export default AddIngredientsForm