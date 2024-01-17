import { Box, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom"

import ElfPointing from "./images/ElfPointing.png"

const SeeUserRecipeButton = () => {
    return (
        <div>
            <Link to="/users_recipes">
                <Button variant="contained"
                    color="success"
                    sx={{ mt: 10, ml: 140, color: "white", borderRadius: "10px", backgroundColor: "#65B741", border: 2, borderBottom: 3, borderColor: "#445D48", textTransform: "none" }}>
                    See Recipes Made by Users
                </Button>
            </Link>
            <Box
                style={{ position: "absolute", zIndex: -1 }}
                sx={{ ml: 140 }}>
                <Stack direction="column">
                    <img
                        src={ElfPointing}
                        alt="Elf pointing to see user's recipe button"
                        width="250px" />
                </Stack>
            </Box>
        </div>
    )
}
export default SeeUserRecipeButton