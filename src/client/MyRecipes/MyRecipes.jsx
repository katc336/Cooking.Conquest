import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useGetUserQuery } from "../../redux/api"

import MyRecipesPage from "./MyRecipesPage.png"
import MyCompletedRecipes from "./MyCompletedRecipes"
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
                                <Typography sx={{ mt: 5, textAlign: "center" }}>
                                    <Link to="/recipes">
                                        <Button
                                            sx={{
                                                m: 1,
                                                fontSize: "20px",
                                                color: "white",
                                                borderRadius: "10px",
                                                backgroundColor: "#65B741",
                                                border: 2,
                                                borderBottom: 5,
                                                borderColor: "#445D48",
                                                textTransform: "none"
                                            }}
                                        >
                                            Click here to start a new recipe quest!
                                        </Button>
                                    </Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <img
                                src={MyRecipesPage}
                                alt="Image of a border, with a magical mystical spell book at the top"
                                style={{ marginTop: "100px", position: "absolute", zIndex: -1 }}
                                width="900" />
                            <MyCompletedRecipes />
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
                                <AddRecipeNavButton />
                            </Box>
                        </Grid>
                        <Grid item xs={7}>
                            <img
                                src={MyRecipesPage}
                                alt="Image of a border, with a magical mystical spell book at the top"
                                style={{ marginTop: "100px", position: "absolute", zIndex: -1 }}
                                width="900" />
                            <Box sx={{ mt: 70, px: 15 }}>
                               <MyPostedRecpipes />
                            </Box>
                        </Grid>
                    </Grid>

                </div>
            }
        </motion.div>
    )
}
export default MyRecipes