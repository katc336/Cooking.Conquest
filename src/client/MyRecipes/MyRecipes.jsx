import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"
import { useGetUserQuery } from "../../redux/api"

import MyRecipesPage from "./MyRecipesPage.png"
import MyCompletedRecipes from "./MyCompletedRecipes"
import MyIncompleteRecipes from "./MyIncompleteRecipes"
import AddRecipeNavButton from "./AddRecipeNavButton"
import MyPostedRecpipes from "../UserPostedRecipe/MyPostedRecipes"

const MyRecipes = () => {
    const { data, error, isLoading } = useGetUserQuery();
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

            {data && data.level !== 4
                ? //if not level 4...
                <div>
                    <Grid container>
                        <Grid item xs={5}>
                            <Box sx={{ mt: 15, pt: "10%" }}>
                                <Typography
                                    variant="h3"
                                    sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                    {data && data.name}'s Recipe Spell Book
                                </Typography>
                                <MyCompletedRecipes />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <img
                                src={MyRecipesPage}
                                alt="Image of a border, with a magical mystical spell book at the top"
                                style={{ marginTop: "100px", position: "absolute", zIndex: -1 }}
                                width="900" />
                            <MyIncompleteRecipes />
                        </Grid>
                    </Grid>
                </div>
                : //if level 4...
                <div>
                    <Grid container>
                        <Grid item xs={5}>
                            <Box sx={{ mt: 15, pt: "10%" }}>
                                <Typography
                                    variant="h3"
                                    sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                    {data && data.name}'s Recipe Spell Book
                                </Typography>
                                <MyPostedRecpipes />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <img
                                src={MyRecipesPage}
                                alt="Image of a border, with a magical mystical spell book at the top"
                                style={{ marginTop: "100px", position: "absolute", zIndex: -1 }}
                                width="900" />
                                <Box sx={{ mt: 70, px: 15 }}>
                            <AddRecipeNavButton />
                            </Box>
                        </Grid>
                    </Grid>

                </div>
            }
        </motion.div>
    )
}
export default MyRecipes