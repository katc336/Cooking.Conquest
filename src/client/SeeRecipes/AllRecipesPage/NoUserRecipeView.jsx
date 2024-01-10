import { Box, Button, Stack, Typography } from "@mui/material"

import { Link } from "react-router-dom"

import LockedRecipeIcon from "../images/LockedRecipeIcon.png"

const NoUserRecipeView = () => {
    return (
        <div>
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