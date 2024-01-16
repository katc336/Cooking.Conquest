import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../../redux/api";

import SingleRecipeBorder from "../images/SingleRecipeBorder.png"
import IngredientCard from "../images/IngredientCard.png"
import Scroll from "../images/Scroll.png"
import AddRecipeButton from "./AddRecipeButton";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const SingleRecipe = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleRecipeQuery(id);

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Stack direction="row">
                <Box
                    sx={{ pt: 2, pb: 250, mt: 5 }}
                    style={{
                        backgroundImage: `url(${SingleRecipeBorder})`,
                        backgroundSize: "cover",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Box sx={{ pt: "5%", px: "25%" }}>
                        <Stack direction="column">
                            <img 
                            src={Scroll}
                            alt="Scroll background image"
                            width="750px"
                            style={{ position: "absolute", zIndex: -1 }}
                            />
                                <Typography
                                    variant="h4"
                                    sx={{ mt: "5%", mx: "5%", textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                    {data && data.name}
                                </Typography>
                                <Typography
                                    sx={{ mx: 10, color: "#362706" }}>
                                    {data && data.description}
                                </Typography>
                            
                            <AddRecipeButton />
                        </Stack>
                    </Box>
                    <Grid container>
                        <Grid item xs={5}>
                            {/* <RecipeIngredients /> */}
                        </Grid>
                        <Grid item xs={7}>
                            {/* <RecipeInstructions /> */}
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </motion.div>
    )
}
export default SingleRecipe