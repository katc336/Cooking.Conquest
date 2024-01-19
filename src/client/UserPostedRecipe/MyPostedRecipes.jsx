import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import { motion } from "framer-motion"

import { useGetMyUsersRecipeQuery } from "../../redux/api"
import DeleteRecipeButton from "./Buttons/DeleteRecipeButton"
import EditRecipeButton from "./Buttons/EditRecipeButton"

const MyPostedRecpipes = () => {
    const { data, error, isLoading } = useGetMyUsersRecipeQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data)
    }
    if (!data) {
        console.log("No logged in user")
    }
    if (error) {
        console.log(console.log("No user is logged in"))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            {data && data.map((recipe) => (
                <div key={recipe.id}>
                    <Box sx={{ flexDirection: "row-reverse", p: 3, mx: 1, my: 1, backgroundColor: "#F1E4C3", border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box sx={{ p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", mr: 2 }}>
                                    <Typography
                                        variant="h5">
                                        {recipe.name}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box sx={{ p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", }}>
                                    <Typography
                                        variant="h6">
                                        {recipe.description}
                                    </Typography>
                                    <Typography sx={{ textAlign: "center" }}>
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ mt: 3, mx: 1, p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", }}>
                                    {recipe.userIngredients.map((ingredients) => (
                                        <div key={ingredients.id}>
                                            <Stack direction="row">
                                                <Typography sx={{ mr: 1 }}>
                                                    {ingredients.quantity}
                                                </Typography>
                                                <Typography>
                                                    {ingredients.name}
                                                </Typography>
                                            </Stack>
                                        </div>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ mt: 3, mx: 1, p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", }}>
                                    {recipe.UserInstructions.map((instructions) => (
                                        <div key={instructions.id}>
                                            <Stack direction="row">
                                                <Typography sx={{ mr: 1 }}>
                                                    {instructions.stepNumber}
                                                </Typography>
                                                <Typography>
                                                    {instructions.description}
                                                </Typography>
                                            </Stack>
                                        </div>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                        {/* <EditRecipeButton
                            id={recipe.id} /> */}
                        <DeleteRecipeButton
                            id={recipe.id} />
                    </Box>
                </div>
            ))
            }
        </motion.div >
    )
}
export default MyPostedRecpipes