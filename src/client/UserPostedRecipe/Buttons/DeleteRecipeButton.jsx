import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useState } from "react"

import { motion } from "framer-motion"

import { useDeleteUsersRecipeMutation } from "../../../redux/api"

const DeleteRecipeButton = ({ id }) => {
    const [alert, setAlert] = useState(false)
    const [deleteButton, setDeleteButton] = useState(true)
    const [deleteRecipe, { data }] = useDeleteUsersRecipeMutation(id)
    console.log(data);

    const handleDelete = async () => {
        try {
            const result = await deleteRecipe(id);
            console.log("Success!")
            console.log(result)
            // window.location.reload()
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <motion.div>
            <Typography sx={{ textAlign: "center", mt: 1 }}>
                {alert && <Alert severity="warning">
                    <Stack direction="column">
                        Are you sure you want to delete this recipe? Once you do, it's gone forever.
                        <Button
                            onClick={() => handleDelete() }
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
                            Yes, I want to delete this recipe.
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                                setAlert(false),
                                    setDeleteButton(true)
                            }}
                            sx={{
                                textTransform: "none",
                                m: 1,
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                            }}>
                            No, keep this recipe.
                        </Button>
                    </Stack>
                </Alert>
                }
                {deleteButton &&
                    <Button
                        onClick={() => {
                            setAlert(true),
                                setDeleteButton(false)
                        }}
                        variant="contained"
                        color="error"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#D24545",
                            border: 2,
                            borderBottom: 5,
                            borderColor: "#862B0D",
                            borderRadius: "10px"
                        }}>
                        Delete Recipe
                    </Button>
                }
            </Typography>
        </motion.div>
    )
}
export default DeleteRecipeButton