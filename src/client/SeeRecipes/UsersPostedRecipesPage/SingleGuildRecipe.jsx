import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';

import { motion } from "framer-motion";
import { useParams } from 'react-router';

import { useGetSingleGuildRecipesQuery } from "../../../redux/api";

import SingleRecipeBorder from "../images/SingleRecipeBorder.png"
import Scroll from "../images/Scroll.png"
import GuildRecipeIngredients from "./GuildRecipeIngredients";
import GuildRecipeInstructions from "./GuildRecipeInstructions";
import AddRatingButton from "./AddRatingButton";

const SingleUsersPostedRecipe = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleGuildRecipesQuery(id);

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
                    <Box sx={{ pt: "10%", px: "25%", mb: 10 }}>
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
                                {data && data.recipe.name}
                            </Typography>
                            {data.roundedAverage > 0
                                ?
                                <div>
                                    <Typography
                                        variant="h6"
                                        sx={{ mt: 1, mx: "5%", textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                                        Average Rating:
                                    </Typography>
                                    <Rating
                                        name="read-only"
                                        value={data.roundedAverage}
                                        readOnly
                                        sx={{ mx: "42%" }} />
                                </div>
                                :
                                <div>
                                    <Box sx={{ mx: 20, border: 3, borderColor: "#862B0D", borderRadius: "20px" }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ textAlign: "center" }}>
                                            This recipe has not been rated yet.
                                        </Typography>
                                    </Box>
                                </div>}
                            <Typography
                                sx={{ mx: 10, color: "#362706" }}>
                                {data && data.recipe.description}
                            </Typography>
                            <AddRatingButton
                                id={data.recipe.id} />
                        </Stack>
                    </Box>
                    <Grid container>
                        <Grid item xs={5}>
                            <GuildRecipeIngredients />
                        </Grid>
                        <Grid item xs={7}>
                            <GuildRecipeInstructions />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </motion.div>
    )
}
export default SingleUsersPostedRecipe