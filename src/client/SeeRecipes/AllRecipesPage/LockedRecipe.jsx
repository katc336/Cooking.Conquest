import { Box, Typography, Stack, Tooltip } from "@mui/material"

import LockedRecipeIcon from "../images/LockedRecipeIcon.png"

const LockedRecipe = () => {
    return (
        <div>
            <Box sx={{ mt: 10, p: 3, border: 20, backgroundColor: "#F5F7F8", borderColor: "#B6BBC4", borderRadius: "10px", mx: "6%" }}>
                <Stack direction="column">
                    <Typography variant="h6" sx={{ color: "#61677A", textAlign: "center", fontWeight: "bold", mb: 5 }}>
                        To unlock more recipes, complete 4 recipes on your current level
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        <img src={LockedRecipeIcon} width="100px" />
                    </Typography>
                </Stack>
            </Box>

        </div>
    )
}
export default LockedRecipe