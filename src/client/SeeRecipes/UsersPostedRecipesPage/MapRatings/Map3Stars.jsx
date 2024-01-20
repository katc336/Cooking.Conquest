import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useGetSingleGuildRecipesQuery } from "../../../../redux/api";

const Map3Stars = ({ id }) => {
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
        <div>
            <Box sx={{ mx: 10, mt: 10, p: 3, backgroundColor: "#F1E4C3", border: 3, borderColor: "#503C3C", borderBottom: 7, borderRadius: "20px" }}>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    3 Star Reviews:
                </Typography>
                    {data && data.recipe.rating.map((rating) => (
                        <div key={rating.id}>
                            {rating.rating === 3
                                ?
                                <div>
                                    <Box sx={{ m: 1, p: 2, backgroundColor: "#FFF8E3", borderRadius: "20px" }}>
                                        <Rating
                                            name="read-only"
                                            value={rating.rating}
                                            readOnly />
                                        <Typography>
                                            {rating.writtenReview}
                                        </Typography>
                                    </Box>
                                </div>
                                :
                                <div />}
                        </div>
                    ))}
            </Box>
        </div>
    )
}
export default Map3Stars