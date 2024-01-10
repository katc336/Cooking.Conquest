import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../../redux/api";

import IngredientCard from "../images/IngredientCard.png"

const RecipeIngredients = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleRecipeQuery(id);

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
            <Box
                sx={{ ml: "20%", mt: 5, p: 5, textAlign: "center", fontWeight: "bold" }}
                style={{
                    height: "100%",
                    backgroundImage: `url(${IngredientCard})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                <Typography
                    variant="h5"
                    sx={{ pt: "30%", textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Gather Your Ingredients
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    {data.ingredients}
                </Typography>
            </Box>
        </div>
    )
}
export default RecipeIngredients