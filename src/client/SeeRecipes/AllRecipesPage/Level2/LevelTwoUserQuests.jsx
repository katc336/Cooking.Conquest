import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetUserQuery, useGetLevelTwoRecipesQuery } from "../../../../redux/api"

import NoUserRecipeView from "../NoUserRecipeView"
import RecipeBorder from "../images/RecipeBorder.png"

const LevelTwoUserQuests = () => {
    const { data, error, isLoading } = useGetLevelTwoRecipesQuery();
    const { data: userData, error: userError, isLoading: userIsLoading } = useGetUserQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            {userData.level === 2 || userData.level === 3 || userData.level === 4
                ? //if user with hight enough level...
                <div>
                    <Box sx={{ px: "7%", backgroundColor: "transparent" }}>
                        <Typography
                            variant="h4"
                            sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                            Level Two:
                        </Typography>
                        <Stack direction="row" useFlexGap flexWrap="wrap">
                            {data && data.map((recipes) => (
                                <div key={recipes.id}>
                                    <Tooltip title="Click to see recipe details">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/recipe/${recipes.id}`}>
                                            <Box
                                                sx={{ m: 1, p: 3, pb: 5 }}
                                                style={{
                                                    backgroundImage: `url(${RecipeBorder})`,
                                                    width: "150px",
                                                    height: "150px",
                                                    backgroundSize: "contain",
                                                    backgroundRepeat: "no-repeat",
                                                }}>
                                                <Stack direction="column">
                                                    <Typography
                                                        variant="h5"
                                                        sx={{ fontWeight: "bold", textAlign: "center", color: "#362706", p: 1 }}>
                                                        {recipes.name}
                                                    </Typography>
                                                    <Typography sx={{ textAlign: "center" }}>
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                        </Link>
                                    </Tooltip>
                                </div>
                            ))
                            }
                        </Stack>
                    </Box>
                </div>
                : //if no user or lower level...
                <div>
                    <NoUserRecipeView />
                </div>}
        </div >
    )
}
export default LevelTwoUserQuests