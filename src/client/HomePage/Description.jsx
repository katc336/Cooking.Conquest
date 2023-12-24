import { Box, Grid, Typography } from "@mui/material"
const Description = () => {
    return (
        <div>
            <Box sx={{ mt: 10, mx: "15%" }}>
                <Grid container sx={{}}>
                    <Grid item sx={6}>
                        <Typography variant="h5">
                            Embark on a culinary adventure with Cooking Conquest!
                        </Typography>
                    </Grid>
                   
                    <Grid item sx={6}>
                        <Typography variant="h5">
                            Cooking Conquest is here to make vegetarian cooking a fun and rewarding experience for all!
                            Select your recipe quest, and watch your skills grow as you conquer a variety of delicious vegetarian recipes.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default Description