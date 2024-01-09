import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useGetUserQuery } from "../../redux/api";

import Scroll from "./Scroll.png"
import SingleRecipeBorder from "./SingleRecipeBorder.png"
import LevelOneRecipes from "./LevelOneRecipes";
import LevelTwoRecipes from "./LevelTwoRecipes";
import LevelThreeRecipes from "./LevelThreeRecipes";

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
        <div>
            <Stack direction="row">
                <Box
                    sx={{ pt: 2, pb: 50 }}
                    style={{
                        backgroundImage: `url(${SingleRecipeBorder})`,
                        backgroundSize: "cover",
                        width: "100%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h2"
                        sx={{ mt: 15, textAlign: "center", color: "#445D48", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <Box sx={{ pt: "5%", px: 15 }}>
                        <Stack direction="column">
                            <Box
                                sx={{ pb: 25 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelOneRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 20 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelTwoRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 20 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelThreeRecipes />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </div >
    )
}
export default RecipesPage


