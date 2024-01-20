import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { useParams } from 'react-router';

import { useGetSingleGuildRecipesQuery } from "../../../redux/api";

import jewelBullet from "../images/jewelBullet.png"

const GuildRecipeInstructions = () => {
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
            <Box sx={{ ml: 15, mr: 5, mt: 10, p: 3, backgroundColor: "#F1E4C3", border: 3, borderColor: "#503C3C", borderBottom: 7, borderRadius: "20px" }}>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                   Instructions:
                </Typography>
                {data && data.recipe.UserInstructions.map((instructions) => (
                    <div key={instructions.id}>
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
                                {`${instructions.stepNumber}: ${instructions.description}`}
                            </Typography>
                        </Stack>
                    </div>
                ))}
            </Box>
        </div>
    )
}
export default GuildRecipeInstructions