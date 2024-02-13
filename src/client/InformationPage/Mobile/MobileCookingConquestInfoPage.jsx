import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { motion } from "framer-motion";

import AddRecipePageView from "../images/AddRecipePageView.png";
import DashboardPageView from "../images/DashboardPageView.png";
import LockedLevelPageView from "../images/LockedLevelPageView.png";
import SingleRecipePageView from "../images/SingleRecipePageView.png";

const MobileCookingConquestInfoPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Card
                elevation={10}
                sx={{ m: 3, p: 1, backgroundImage: "radial-gradient(circle, #fffedd, #fffed9, #fffed5, #fffed1, #fffecd, #fdfac5, #fbf5bc, #f9f1b4, #f5e7a6, #f0dc99);" }}>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
                    Welcome to Cooking Conquest!
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    You are about to embark on an exciting journey to learn and conquer the world of vegetarian cooking.
                    This app is designed to make your cooking experience interactive and fun,
                    all while helping you develop new skills and knowledge.
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    Begin with level-appropriate recipes and follow the step-by-step instructions provided,
                    along with helpful tips to guide you along your cooking journey. As you complete recipes,
                    you will gain experience points to level up.
                    With each level, you will unlock new recipes and cooking skills that increase in difficulty.
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    Once you reach level 3, you can join a "guild" within the app community.
                    Guilds are groups of users who collaborate to create and share new vegetarian recipes.
                    Joining a guild allows you to compete with others by reviewing and rating each other's recipes, earning points,
                    and contributing to your guild’s cumulative score on the Leader Board.
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 5 }}>
                    This friendly competition and sense of camaraderie within the community will keep you motivated
                    and engaged in your vegetarian cooking conquest.
                </Typography>
                <img
                    src={SingleRecipePageView}
                    alt="Page view of all recipes"
                    width="300px" />
                <Typography
                    sx={{ color: "#362706" }}>
                    Click on a recipe to see more about it.
                </Typography>
                <img
                    src={LockedLevelPageView}
                    alt="Page view of a locked level"
                    width="300px" />
                <Typography
                    sx={{ color: "#362706" }}>
                    Some recipes are locked until you reach that recipe's level
                </Typography>
                <img
                    src={AddRecipePageView}
                    alt="Page view of how to add a recipe"
                    width="300px" />
                <Typography
                    sx={{ color: "#362706" }}>
                    Click on the add recipe button to add the recipe to your account.
                </Typography>
                <Typography
                    sx={{ color: "#362706" }}>
                    You will need to complete 4 recipes to level up. You can see your progress here.
                </Typography>
                <img
                    src={DashboardPageView}
                    alt="Page view of the user dashboard"
                    width="300px" />
                <Typography
                    sx={{ color: "#362706" }}>
                    Click on the complete recipe button when you successfully make a recipe
                </Typography>
            </Card>
        </motion.div>
    )
}
export default MobileCookingConquestInfoPage