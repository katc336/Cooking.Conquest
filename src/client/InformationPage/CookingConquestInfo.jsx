import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import InformationScroll from "./InformationScroll.png"

const CookingConquestInfo = () => {
    return (
        <div>
            <Box
                sx={{ mx: "5%", mt: "5%", pt: "15%", px: "17%" }}
                style={{
                    backgroundImage: `url(${InformationScroll})`,
                    backgroundSize: "cover",
                    width: "60%",
                    backgroundRepeat: "no-repeat",
                }}>
                <Grid container>
                    {/* <-------------------Row 1-------------------> */}
                    <Grid item sx={6}>
                        <Typography  sx={{ color: "#362706", mb: 2 }}>
                            Welcome to Cooking Conquest!
                            Youare about to embark on an exciting journey to learn and conquer the world of vegetarian cooking.
                            This app is designed to make your cooking experience interactive and fun,
                            all while helping you develop new skills and knowledge.
                        </Typography>
                    </Grid>
                    <Grid item sx={6}>
                        <img src="" alt="PLACEHOLDER" />
                    </Grid>
                    {/* <-------------------Row 2-------------------> */}
                    <Grid item sx={6}>
                    <img src="" alt="PLACEHOLDER" />
                    </Grid>
                    <Grid item sx={6}>
                        <Typography  sx={{ color: "#362706", mb: 2 }}>
                            Begin with level-appropriate recipes and follow the step-by-step instructions provided,
                            along with helpful tips to guide you along your cooking journey. As you complete recipes,
                            you will gain experience points to level up.
                            With each level, you will unlock new recipes and cooking skills that increase in difficulty.
                        </Typography>
                    </Grid>
                    {/* <-------------------Row 3-------------------> */}
                    <Grid item sx={6}>
                        <Typography  sx={{ color: "#362706", mb: 2 }}>
                            Once you reach level 3, you can join a "guild" within the app community.
                            Guilds are groups of users who collaborate to create and share new vegetarian recipes.
                            Joining a guild allows you to compete with others by reviewing and rating each other's recipes, earning points,
                            and contributing to your guild’s cumulative score.
                        </Typography>
                    </Grid>
                    <Grid item sx={6}>
                    <img src="" alt="PLACEHOLDER" />
                    </Grid>
                    {/* <-------------------Row 4-------------------> */}
                    <Grid item sx={6}>
                    <img src="" alt="PLACEHOLDER" />
                    </Grid>
                    <Grid item sx={6}>
                        <Typography  sx={{ color: "#362706", mb: 2 }}>
                            COMING SOON:  keep an eye out for the leaderboard to see how your guild and individual cooking skills rank.
                            This friendly competition and sense of camaraderie within the community will keep you motivated 
                            and engaged in your vegetarian cooking conquest.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default CookingConquestInfo