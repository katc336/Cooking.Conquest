import { Box, Typography, Stack, Tooltip } from "@mui/material"

import LockedRecipeIcon from "./LockedRecipeIcon.png"

const LockedRecipe = () => {
    return (
        <div>
            <Box sx={{ mt: 10, p: 3, border: 5, backgroundColor: "#F5F7F8", borderColor: "#B6BBC4", borderRadius: "10px", mx: "5%" }}>
                <Typography variant="h4" sx={{ color: "#445D48", textAlign: "center", my: 3 }}>
                    Level Three Recipes
                </Typography>
                <Stack direction="column">
                    <Typography variant="h6" sx={{ color: "#61677A", textAlign: "center", fontWeight: "bold", mb: 5 }}>
                        To unlock these recipes, complete 4 recipes
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