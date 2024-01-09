import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../redux/api"

import SingleRecipeBorder from "./SingleRecipeBorder.png"
import IngredientCard from "./IngredientCard.png"
import Scroll from "./Scroll.png"

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
            transition={{ duration: 0.5, ease: "easeIn" }}>
            {data &&
                <Stack direction="row">
                    <Box
                        sx={{ pt: 2, pb: 250 }}
                        style={{
                            backgroundImage: `url(${SingleRecipeBorder})`,
                            backgroundSize: "cover",
                            width: "100%",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <Box sx={{ pt: "5%", px: "25%" }}>
                            <Stack direction="column">
                                <Box
                                    sx={{ mx: "15%", mt: 5, textAlign: "center", color: "#445D48", fontWeight: "bold" }}
                                    style={{
                                        width: "100%",
                                        backgroundImage: `url(${Scroll})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    <Typography
                                        variant="h2"
                                        sx={{ pt: 5, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                        {data.name}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        sx={{ pt: 1, pb: 5, px: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                        {data.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                        <Grid container>
                            <Grid item xs={6}>
                                <Box
                                    sx={{ mx: "15%", mt: 5, p: 5, textAlign: "center", fontWeight: "bold" }}
                                    style={{
                                        height: "100%",
                                        backgroundImage: `url(${IngredientCard})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    <Typography sx={{ pt: "30%", textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                        Step 1: Gather Your Ingredients
                                    </Typography>
                                    <Typography sx={{ pt: 1 }}>
                                        {data.ingredients}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>

                            </Grid>
                        </Grid>

                    </Box>
                </Stack>
            }
        </motion.div>
    )
}
export default SingleRecipe