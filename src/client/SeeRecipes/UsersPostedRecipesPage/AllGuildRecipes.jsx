import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { useGetAllGuildRecipesQuery } from "../../../redux/api";

import { useMemo } from "react";

import SingleRecipeBorder from "../images/SingleRecipeBorder.png"

const UsersPostedRecipes = () => {

    const { data, error, isLoading } = useGetAllGuildRecipesQuery()

    // const averageRating = useMemo(() => {
    //     let sum = 0;
    //     for ( let i = 0; i < data.rating.length; i++) {
    //         sum = sum + data.review[i];
    //     };
    //     return sum / (data.review.length)
    // }, (data.length));
    // console.log("test" + averageRating )

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
                        backgroundSize: "contain",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h2"
                        sx={{ mt: 10, ml: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                        Recipes Made By Users:
                    </Typography>
                    <Box sx={{ mt: 5, ml: 40, mr: 20 }}>
                        {data && data.map((recipe) => (
                            <div key={recipe.id}>
                                <Box sx={{ p: 3, mx: 1, my: 1, backgroundColor: "#F1E4C3", border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Box sx={{ p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", mr: 2 }}>
                                                <Typography
                                                    variant="h5">
                                                    {recipe.name}
                                                </Typography>
                                                <Link to={`/users_recipes/${recipe.id}`}>
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        sx={{
                                                            mt: 3,
                                                            width: "100%",
                                                            p: 1,
                                                            fontSize: "20px",
                                                            color: "white",
                                                            borderRadius: "10px",
                                                            backgroundColor: "#65B741",
                                                            border: 2,
                                                            borderBottom: 5,
                                                            borderColor: "#445D48",
                                                            textTransform: "none"
                                                        }}>
                                                        See Recipe
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box sx={{ p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", }}>
                                                <Typography
                                                    variant="h6">
                                                    {recipe.description}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        ))}
                    </Box>
                </Box>
            </Stack>
        </motion.div>
    )
}
export default UsersPostedRecipes