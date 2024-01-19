import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import { useState } from "react"

import { useUpdateUsersRecipeMutation } from "../../../redux/api"
import { Typography } from "@mui/material"


const EditRecipeDescriptionButton = ({ id }) => {
    const [edit, setEdit] = useState(false)
    const [button, setButton] = useState(true)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const [patchRecipe] = useUpdateUsersRecipeMutation(id)

    const handleSubmit = async (id) => {
        try {
            const result = await patchRecipe({ name, description })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            {button &&
                <Typography sx={{ textAlign: "center" }}>
                    <Button
                        onClick={() => { setButton(false), setEdit(true) }}
                        color="success"
                        variant="contained"
                        sx={{
                            width: "130px",
                            textTransform: "none",
                            m: 1,
                            borderRadius: "10px",
                            backgroundColor: "#65B741",
                            border: 2,
                            borderBottom: 5,
                            borderColor: "#445D48",
                        }}>
                        Edit
                    </Button>
                </Typography>
            }
            {edit &&
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                label="Edit Name"
                                value={name}
                                multiline
                                onChange={(event) => setName(event.target.value)}
                                size="small"
                                sx={{ width: "100%", my: 1 }}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Edit Description"
                                value={description}
                                multiline
                                onChange={(event) => setDescription(event.target.value)}
                                size="small"
                                sx={{ width: "100%" }}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ textAlign: "center" }}>
                                <Button
                                    type="submit"
                                    color="success"
                                    variant="contained"
                                    sx={{
                                        width: "130px",
                                        textTransform: "none",
                                        m: 1,
                                        mb: 1,
                                        borderRadius: "10px",
                                        backgroundColor: "#65B741",
                                        border: 2,
                                        borderBottom: 5,
                                        borderColor: "#445D48",
                                    }}>
                                    Save
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
            }
        </div>
    )
}
export default EditRecipeDescriptionButton