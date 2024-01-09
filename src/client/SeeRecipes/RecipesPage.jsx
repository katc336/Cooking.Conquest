import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useGetUserQuery } from "../../redux/api";

import Scroll from "./images/Scroll.png"
import ElvinChef from "./images/ElvinChef.png"
import SingleRecipeBorder from "./images/SingleRecipeBorder.png"
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
                    <Box sx={{ ml: "43%", mt: 7,}}>
                        <img
                            src={ElvinChef}
                            style={{ position: "absolute", zIndex: -1 }}
                            width="600px" />
                    </Box>
                    <Typography
                        variant="h2"
                        sx={{ mt: 15, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                        Recipe Quests:
                    </Typography>
                    <Box sx={{ pt: "12%", px: 15 }}>
                        <Stack direction="column">
                            <Box
                                sx={{ pb: 5 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelOneRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 5 }}
                                style={{
                                    width: "100%",
                                    backgroundImage: `url(${Scroll})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                }}>
                                <LevelTwoRecipes />
                            </Box>
                            <Box
                                sx={{ pb: 5 }}
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


