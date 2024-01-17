import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useGetUserQuery } from "../../../redux/api";

import Scroll from "../images/Scroll.png"
import ElfChef from "./images/ElfChef.png"
import SingleRecipeBorder from "../images/SingleRecipeBorder.png"
import LevelOneRecipes from "./Level1/LevelOneRecipes";
import LevelTwoRecipes from "./Level2/LevelTwoRecipes";
import LevelThreeRecipes from "./Level3/LevelThreeRecipes";
import SeeUserRecipeButton from "./SeeUserRecipeButton";

const RecipesPage = () => {
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Stack direction="row">
                <Box
                    sx={{ pt: 2, pb: 50, mt: 5 }}
                    style={{
                        backgroundImage: `url(${SingleRecipeBorder})`,
                        backgroundSize: "cover",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Box
                        style={{ position: "absolute", zIndex: -1 }}
                        sx={{ ml: "13%", mt: 12, }}>
                        <img
                            src={ElfChef}
                            width="700px" />
                    </Box>
                    <SeeUserRecipeButton />
                    <Typography
                        variant="h2"
                        sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <Box 
                    sx={{ maxWidth: 250, mt: 13, ml: "35%", color: "#362706", fontWeight: "bold" }}>
                        <Typography
                            variant="h4">
                            Click on a recipe to view it
                        </Typography>
                    </Box>
                    <Box sx={{ px: 15 }}>
                        <Stack direction="column">
                            <Box sx={{ my: 4 }}>
                                <img
                                    src={Scroll}
                                    alt="Scroll background image"
                                    width="1800px"
                                    style={{ position: "absolute", zIndex: -1 }}
                                />
                                <LevelOneRecipes />
                            </Box>
                            <Box sx={{ my: 3 }}>
                                <img
                                    src={Scroll}
                                    alt="Scroll background image"
                                    width="1800px"
                                    style={{ position: "absolute", zIndex: -1 }}
                                />
                                <LevelTwoRecipes />
                            </Box>
                            <Box sx={{ my: 3 }}>
                                <img
                                    src={Scroll}
                                    alt="Scroll background image"
                                    width="1800px"
                                    style={{ position: "absolute", zIndex: -1 }}
                                />
                                <LevelThreeRecipes />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </motion.div >
    )
}
export default RecipesPage


