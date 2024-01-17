import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useParams } from 'react-router';

import { useGetAllGuildRecipesQuery } from "../../../redux/api";

import SingleRecipeBorder from "../images/SingleRecipeBorder.png"
import IngredientCard from "../images/IngredientCard.png"
import Scroll from "../images/Scroll.png"

const UsersPostedRecipes = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetAllGuildRecipesQuery()

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
                    <Typography
                        variant="h2"
                        sx={{ mt: 13, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                        Recipes Made By Users:
                    </Typography>
                    <Box sx={{ mt: 5, px: 40 }}>
                        <Stack direction="row" >
                            {data && data.map((recipe) => (
                                <div key={recipe.id}>
                                    <Box
                                        sx={{
                                            p: 3,
                                            mx: 1,
                                            backgroundColor: "#F1E4C3",
                                            border: 2,
                                            borderColor: "#445D48",
                                            borderBottom: 5,
                                            borderRadius: "20px"
                                        }}>
                                        <Typography>
                                            {recipe.name}
                                        </Typography>
                                        <Typography>
                                            {recipe.description}
                                        </Typography>
                                    </Box>
                                </div>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </motion.div>
    )
}
export default UsersPostedRecipes