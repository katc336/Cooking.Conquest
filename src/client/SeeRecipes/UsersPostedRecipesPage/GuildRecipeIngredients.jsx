import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useParams } from 'react-router';

import { useGetSingleGuildRecipesQuery } from "../../../redux/api";

import IngredientCard from "../images/IngredientCard.png"
import jewelBullet from "../images/jewelBullet.png"

const GuildRecipeIngredients = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleGuildRecipesQuery(id);

    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            <Box sx={{ fontWeight: "bold", ml: "20%", mt: "15%" }}>
                <img
                    src={IngredientCard}
                    alt="Recipe card background art"
                    width="600"
                    style={{ position: "absolute", zIndex: -1 }} />
                <Typography
                    variant="h5"
                    sx={{ pt: "40%", textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Gather Ingredients:
                </Typography>
                {data && data.recipe.userIngredients.map((ingredient) => (
                    <div key={ingredient.id}>
                        <Stack direction="row" sx={{ ml: "10%" }}>
                            <Box sx={{ mt: 1, mr: 1}}>
                                <img
                                    src={jewelBullet}
                                    alt="Jewel bullet point image"
                                    width="15px"
                                    height="15px"
                                />
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{}}>
                                {ingredient.name}
                            </Typography>
                        </Stack>
                    </div>
                ))}
            </Box>
        </div>
    )
}
export default GuildRecipeIngredients