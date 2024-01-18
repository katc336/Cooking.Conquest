import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import { useState } from "react"

import { useUpdateUsersRecipeMutation } from "../../../redux/api"


const EditRecipeDescriptionButton = ({ id }) => {
    const [edit, setEdit] = useState(false)
    const [button, setButton] = useState(true)
    const [description, setDescription] = useState("")

    const [patchRecipe] = useUpdateUsersRecipeMutation(id)

    const handleSubmit = async (id) => {
        try {
            const result = await patchRecipe({ id, description })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            {button &&
                <Button
                    onClick={() => { setButton(false), setEdit(true) }}
                    color="success"
                    variant="contained"
                    sx={{
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
            }
            {edit &&
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={10}>
                            <TextField
                                label="Edit Description"
                                value={description}
                                multiline
                                onChange={(event) => setDescription(event.target.value)}
                                size="small"
                                sx={{ width: "100%" }}>
                            </TextField>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                color="success"
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    mx: 1,
                                    mb: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                }}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            }
        </div>
    )
}
export default EditRecipeDescriptionButton