import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import { useGetMyUsersRecipeQuery } from "../../redux/api"

const MyPostedRecpipes = () => {
    const { data, error, isLoading } = useGetMyUsersRecipeQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data)
    }
    if (!data) {
        console.log("No logged in user")
    }
    if (error) {
        console.log(console.log("No user is logged in"))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            {data && data.map((recipe) => (
                <div key={recipe.id}>
                    <Box sx={{ flexDirection: "row-reverse", p: 3, mx: 1, my: 1, backgroundColor: "#F1E4C3", border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box sx={{ p: 3, backgroundColor: "#FFF8E3", borderRadius: "20px", mr: 2 }}>
                                    <Typography
                                        variant="h5">
                                        {recipe.name}
                                    </Typography>
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
        </motion.div>
    )
}
export default MyPostedRecpipes