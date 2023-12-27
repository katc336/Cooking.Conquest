import { Box, Button, Stack, Typography } from "@mui/material"

import LockedRecipeIcon from "./LockedRecipeIcon.png"

const NoUserRecipeView = () => {
    return (
        <div>
            <Box sx={{ mx: "15%", my: 1 }}>
                <Button sx={{ textTransform: "none", backgroundColor: "transparent" }}>
                    <Stack direction="column">
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", color: "#362706", fontWeight: "bold", my: 1 }}>
                            Sign up to unlock more recipe quests!
                        </Typography>
                        <Box sx={{ mx: "15%" }}>
                            <img src={LockedRecipeIcon} alt="Locked Icon" width="100px" />
                        </Box>
                    </Stack>
                </Button>
            </Box>
        </div>
    )
}
export default NoUserRecipeView