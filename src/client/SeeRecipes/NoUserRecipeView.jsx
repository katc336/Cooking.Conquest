import { Box, Button, Stack, Typography } from "@mui/material"

import { Link } from "react-router-dom"

import LockedRecipeIcon from "./LockedRecipeIcon.png"

const NoUserRecipeView = () => {
    return (
        <div>
            <Typography sx={{ textAlign: "center" }}>
                <Box>
                    <img src={LockedRecipeIcon}
                        alt="Locked Icon"
                        width="200px" />
                </Box>
            </Typography>
        </div>
    )
}
export default NoUserRecipeView