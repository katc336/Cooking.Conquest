import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useState } from "react"

import { motion } from "framer-motion"

import { useAdminDeleteUserMutation } from "../../../redux/api"

const DeleteUserButton = ({ id }) => {
    const [alert, setAlert] = useState(false);
    const [deleteButton, setDeleteButton] = useState(true);
    const [deleteUser] = useAdminDeleteUserMutation(id);
    const handleDelete = async () => {
        try {
            const result = await deleteUser(id);
            console.log("Success!")
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <motion.div>
            <Typography sx={{ textAlign: "center", mt: 3 }}>
                {alert && <Alert severity="warning">
                    <Stack direction="column">
                        Are you sure you want to delete this user?
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
                            Yes, delete this user.
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
                            No, keep this user.
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
                            mb: 2.5,
                            backgroundColor: "#D24545",
                            border: 2,
                            borderBottom: 5,
                            borderColor: "#862B0D",
                            borderRadius: "10px"
                        }}>
                        Delete User
                    </Button>
                }
            </Typography>
        </motion.div>
    )
}
export default DeleteUserButton