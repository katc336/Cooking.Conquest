import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { useGetUserQuery } from "../../../redux/api"

import MyRecipesPage from "./images/MyRecipesPage.png"
import UsersRecipes from "./UsersRecipes"

const MyRecipes = () => {
    const { data, error, isLoading } = useGetUserQuery();
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
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <Box sx={{ mt: 15 }}>
                        <Typography
                        variant="h3"
                        sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                         {data && data.name}'s Recipe Spell Book
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box
                        sx={{ mt: 5, pb: 70, mb: 20 }}
                        style={{
                            backgroundImage: `url(${MyRecipesPage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <UsersRecipes/>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
export default MyRecipes