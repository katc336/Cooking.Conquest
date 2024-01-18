import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useState } from "react"

import { motion } from "framer-motion"

import { useDeleteRecipeFromUserMutation } from "../../../redux/api"

const DeleteRecipeQuestButton = ({ id }) => {
    const [alert, setAlert] = useState(false)
    const [deleteButton, setDeleteButton] = useState(true)
    const [deleteRecipe, { data }] = useDeleteRecipeFromUserMutation(id)
    console.log(data);

    const handleDelete = async () => {
        try {
            const result = await deleteRecipe(id);
            console.log("Success!")
            console.log(result)
            navigate("/account")
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <motion.div>
            <Typography sx={{ textAlign: "center", mt: 3 }}>
                {alert && <Alert severity="warning">
                    <Stack direction="column">
                        Are you sure you want to give up on this recipe quest?
                        <Button
                            onClick={() => handleDelete(id)}
                            variant="contained"
                            color="error"
                            sx={{
                                textTransform: "none",
                                m: 1,
                                backgroundColor: "#D24545",
                                border: 1,
                                borderBottom: 3,
                                borderColor: "#862B0D",
                                borderRadius: "10px"
                            }}>
                            Yes, I want to abandon this quest
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setAlert(false),
                                    setDeleteButton(true)
                            }
                            }
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
                            No, keep this quest.
                        </Button>
                    </Stack>
                </Alert>
                }
                {deleteButton &&
                    <Button
                        onClick={() => {
                            setAlert(true),
                                setDeleteButton(false)
                        }
                        }
                        variant="contained"
                        color="error"
                        sx={{
                            textTransform: "none",
                            m: 1,
                            backgroundColor: "#D24545",
                            border: 1,
                            borderBottom: 3,
                            borderColor: "#862B0D",
                            borderRadius: "10px"
                        }}>
                        Abandon Quest
                    </Button>
                }
            </Typography>
        </motion.div>
    )
}
export default DeleteRecipeQuestButton