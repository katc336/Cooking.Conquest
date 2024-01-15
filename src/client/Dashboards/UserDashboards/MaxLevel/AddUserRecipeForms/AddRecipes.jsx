import { Box, Typography, Stack } from "@mui/material";
import { useGetUserQuery } from "../../../../../redux/api";
import AddIngredientsForm from "./AddIngredientsForm";
import AddRecipeForm from "./AddRecipeForm";

import Arrow from "./Arrow.png"
const AddRecipe = () => {
    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) {
        console.log(isLoading)
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
            {data && data.level !== 4
                ?//if not level 4, return an empty <div>
                <div />
                :
                <div>
                    {data && data.guildId === null
                        ?
                        <div>
                            <Box sx={{ mt: "12%", backgroundColor: "#F1E4C3", px: 2, py: 1, border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                               <Stack direction="row">
                               <img src={Arrow} alt="Arrow pointing left to show where you can join a guild" width="200px" />
                                <Typography
                                    variant="h4"
                                    sx={{ mx: 2, textAlign: "center" }}>
                                    Join a guild to start sharing recipes 
                                </Typography>
                                </Stack>
                            </Box>
                        </div>
                        :
                        <div>
                            <AddRecipeForm />
                        </div>}
                </div>}

        </div>
    )
}
export default AddRecipe