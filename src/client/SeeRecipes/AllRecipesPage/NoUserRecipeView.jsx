import { Box, Button, Stack, Typography } from "@mui/material"

import { Link } from "react-router-dom"

import LockedRecipeIcon from "./images/LockedRecipeIcon.png"

const NoUserRecipeView = () => {
    return (
        <div>
            <Stack direction="column">
                <Typography
                    variant="h5"
                    sx={{ mt: 10, textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Level locked!
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ textAlign: "center", color: "#362706", fontWeight: "bold" }}>
                    Sign up or level up to unlock more recipes!
                </Typography>
            </Stack>
            <Typography sx={{ textAlign: "center" }}>
                <Box>
                    <img src={LockedRecipeIcon}
                        alt="Locked Icon"
                        width="250px" />
                </Box>
            </Typography>
        </div>
    )
}
export default NoUserRecipeView