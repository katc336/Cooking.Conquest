import { Box, Grid, Typography } from "@mui/material"
import DescriptionCard from "./LevelCard.png"
const Description = () => {
    return (
        <div>
            <Box sx={{ mt: 10, pb: "50%", mx: "20%" }}
                style={{
                    height: "100%",
                    width: "50%",
                    backgroundImage: `url(${DescriptionCard})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}>

                <Typography variant="h5" sx={{ mx: "30%" }}>
                    Cooking Conquest is here to make vegetarian cooking a fun and rewarding experience for all!
                    Select your recipe quest, and watch your skills grow as you conquer a variety of delicious vegetarian recipes.
                </Typography>
            </Box>
        </div>
    )
}
export default Description