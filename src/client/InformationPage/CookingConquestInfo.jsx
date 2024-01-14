import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import { motion } from "framer-motion"

import InformationScroll from "./images/InformationScroll.png"
import AddRecipePageView from "./images/AddRecipePageView.png"
import DashboardPageView from "./images/DashboardPageView.png"
import LockedLevelPageView from "./images/LockedLevelPageView.png"
import SingleRecipePageView from "./images/SingleRecipePageView.png"


const CookingConquestInfo = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}>
            <Box
                sx={{ mx: "5%", mt: "5%", pt: "15%", px: "17%" }}
                style={{
                    backgroundImage: `url(${InformationScroll})`,
                    backgroundSize: "cover",
                    width: "60%",
                    backgroundRepeat: "no-repeat",
                }}>
                {/* <-------------------Row 1-------------------> */}
               <Typography
               variant="h3"
               sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
               Welcome to Cooking Conquest!
               </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706", mb: 2 }}>
                    Youare about to embark on an exciting journey to learn and conquer the world of vegetarian cooking.
                    This app is designed to make your cooking experience interactive and fun,
                    all while helping you develop new skills and knowledge.
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706", mb: 2 }}>
                    Begin with level-appropriate recipes and follow the step-by-step instructions provided,
                    along with helpful tips to guide you along your cooking journey. As you complete recipes,
                    you will gain experience points to level up.
                    With each level, you will unlock new recipes and cooking skills that increase in difficulty.
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706", mb: 2 }}>
                    Once you reach level 3, you can join a "guild" within the app community.
                    Guilds are groups of users who collaborate to create and share new vegetarian recipes.
                    {/* Joining a guild allows you to compete with others by reviewing and rating each other's recipes, earning points,
                    and contributing to your guild’s cumulative score. */}
                </Typography>
                <Card sx={{ border: 5, borderColor: "#862B0D", backgroundColor: "#FFF9C9", m: 3, p: 2 }}>
                <Typography
                        variant="h5"
                        sx={{ color: "#362706", textAlign: "center" }}>
                        COMING SOON: 
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#362706" }}>
                         Keep an eye out for the leaderboard to see how your guild and individual cooking skills rank!
                        Once tou join a guild, you can compete with others by reviewing and rating each other's recipes, earning points,
                        and contributing to your guild’s cumulative score.
                        This friendly competition and sense of camaraderie within the community will keep you motivated
                        and engaged in your vegetarian cooking conquest.
                    </Typography>
                </Card>
                <Box sx={{ mx: "5%" }}>
                    <Stack direction="row">
                        <img
                            src={SingleRecipePageView}
                            alt="Page view of all recipes"
                            width="650px" />
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706", mt: 25, mx: 1, mb: 1 }}>
                            Click on a recipe to see more details about it.
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ mx: "5%" }}>
                    <Stack direction="row">
                        <img
                            src={LockedLevelPageView}
                            alt="Page view of a locked level"
                            width="550px" />
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706", mx: 1, mt: 15, mb: 1 }}>
                            Some recipes are locked until you reach that recipe's level
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ mx: "1%" }}>
                    <Stack direction="row">
                        <img
                            src={AddRecipePageView}
                            alt="Page view of how to add a recipe"
                            width="600px" />
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706", mt: 15, mx: 1, mb: 3 }}>
                            Click on the add recipe button to add the recipe to your account.
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Stack direction="row">
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706", mt: 10 }}>
                            You will need to complete 4 recipes to level up. You can see your progress here.
                        </Typography>
                        <img
                            src={DashboardPageView}
                            alt="Page view of the user dashboard"
                            width="600px" />
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706", mt: 5, mx: 1 }}>
                            Click on the complete recipe button when you successfully make a recipe
                        </Typography>
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    )
}
export default CookingConquestInfo