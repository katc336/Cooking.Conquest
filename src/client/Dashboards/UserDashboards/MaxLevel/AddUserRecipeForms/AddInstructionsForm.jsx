import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useState } from "react";

import { usePostUserRecipeInstructionsMutation } from "../../../../../redux/api";

const AddInstructionsForm = ({ id }) => {
    const [stepNumber, setStepNumber] = useState(1);
    const [description, setDescription] = useState("");

    const [postInstructions] = usePostUserRecipeInstructionsMutation();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const result = await postInstructions({ stepNumber, description, userPostedRecipeId: id });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Box sx={{ p: 3, m: 3, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
            <Typography
                variant="h5"
                sx={{ m: 1, textAlign: "center", color: "#362706", pt: 2, mx: 2 }}>
                What Are the Instructions?
            </Typography>
            <Stack direction="row">
                <Typography sx={{ mt: 2}}>
                    Step Number:
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        size="small"
                        type="number"
                        value={stepNumber}
                        onChange={(event) => setStepNumber(event.target.value)}
                        required={true}
                        sx={{ width: "9%", m: 1 }}>
                    </TextField>
                    <TextField
                        label="Description"
                        size="small"
                        multiline
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required={true}
                        sx={{ width: "60%", m: 1 }}>
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
                        Add Instruction
                    </Button>
                </form>
            </Stack>
            </Box>
        </div>
    )
}
export default AddInstructionsForm