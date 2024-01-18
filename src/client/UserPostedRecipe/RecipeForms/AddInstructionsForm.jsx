import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { useState } from "react";

import { usePostUserRecipeInstructionsMutation } from "../../../redux/api";

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
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={2}>
                            <TextField
                                label="Step#"
                                size="small"
                                type="number"
                                value={stepNumber}
                                onChange={(event) => setStepNumber(event.target.value)}
                                required={true}
                                sx={{ m: 1 }}>
                            </TextField>
                        </Grid>
                        <Grid item xs={7}>
                        <TextField
                            label="Description"
                            size="small"
                            multiline
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            required={true}
                            sx={{ m: 1, width: "90%" }}>
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
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
                    </Grid>
                </Grid>
            </form>
        </Box>
        </div >
    )
}
export default AddInstructionsForm