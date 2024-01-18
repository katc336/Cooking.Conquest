import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useState } from "react";

import { usePatchCompletedRecipeMutation } from "../../../../redux/api"

const CompleteRecipeQuestButton = ({ recipeId }) => {
    const [alert, setAlert] = useState(false)
    const [completeButton, setCompleteButton] = useState(true)
    const [patchRecipe] = usePatchCompletedRecipeMutation(recipeId);

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
            {alert && <Alert severity="warning">
                <Stack direction="column">
                    Did you make this recipe successfully?
                    <Button
                        onClick={() => handlePatch(recipeId)}
                        variant="contained"
                        color="success"
                        sx={{
                            textTransform: "none",
                                m: 1,
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                        }}>
                        Yes, I've made this recipe and am ready to get my experience points!
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            setAlert(false),
                                setCompleteButton(true)
                        }}
                        sx={{
                            textTransform: "none",
                            m: 1,
                            backgroundColor: "#D24545",
                            border: 1,
                            borderBottom: 3,
                            borderColor: "#862B0D",
                            borderRadius: "10px"
                        }}>
                        Oops, I didn't mean to click this
                    </Button>
                </Stack>
            </Alert>
            }
            {completeButton &&
                <Button
                    onClick={() => {
                        setAlert(true),
                            setCompleteButton(false)
                    }
                    }
                    variant="contained"
                    color="success"
                    sx={{
                        textTransform: "none",
                        mt: 2.5,
                        borderRadius: "10px",
                        backgroundColor: "#65B741",
                        border: 2,
                        borderBottom: 5,
                        borderColor: "#445D48",
                        textTransform: "none"
                    }}>
                    Complete Recipe Quest
                </Button>
            }
        </div>
    )
}
export default CompleteRecipeQuestButton
