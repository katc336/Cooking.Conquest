import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../../redux/api";

import InstructionsCard from "../images/InstructionsCard.png"

const RecipeInstructions = () => {
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
                sx={{ mr: "5%", mt: 5, p: 5, textAlign: "center", fontWeight: "bold" }}
                style={{
                    height: "100%",
                    backgroundImage: `url(${InstructionsCard})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                <Typography
                    variant="h5"
                    sx={{ px: 3, color: "#362706", fontWeight: "bold" }}>
                    Intructions
                </Typography>
                <Typography sx={{ pt: 1 }}>
                    {data.insructions}
                </Typography>
            </Box>
        </div>
    )
}
export default RecipeInstructions