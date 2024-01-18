import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack"

import { motion } from 'framer-motion';

import { useGetSingleUsersRecipeQuery, useGetSingleUsersIngredientsQuery, useGetSingleUserInstructionsQuery } from '../../../redux/api';

const DisplayAddedRecipe = ({ id }) => {
    const { data, error, isLoading } = useGetSingleUsersRecipeQuery(id);
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            {data && (
                <div>
                    <Box sx={{ p: 3, m: 3, backgroundColor: '#FFF8E3', borderRadius: '20px' }}>
                        <Box sx={{ mx: 2, p: 2, border: 3, borderColor: "#F1E4C3", borderRadius: "20px", }}>
                            <Typography
                                variant="h4"
                                sx={{ textAlign: "center" }}>
                                {data.name}
                            </Typography>
                            <Typography>
                                Description: {data.description}
                            </Typography>
                        </Box>
                        <Stack direction="row">
                            <Box sx={{ my: 3, mx: 2, p: 2, border: 3, borderColor: "#F1E4C3", borderRadius: "20px", width: 350, minHeight: 50 }}>
                                <Stack direction="column">
                                    <Typography sx={{ textAlign: "center" }}>
                                        Ingredients:
                                    </Typography>
                                    {data && data.userIngredients.map((ingredient) => (
                                        <div key={ingredient.id}>
                                            <Stack direction="row" sx={{ ml: "10%" }}>
                                                <Box sx={{ mt: 1, mr: 1 }}>
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{}}>
                                                    {`${ingredient.quantity}: ${ingredient.name}`}
                                                </Typography>
                                            </Stack>
                                        </div>
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ my: 3, mx: 2, p: 2, border: 3, borderColor: "#F1E4C3", borderRadius: "20px", width: 350, minHeight: 50 }}>
                                <Stack direction="column">
                                    <Typography sx={{ textAlign: "center" }}>
                                        Instructions:
                                        {data && data.UserInstructions.map((instructions) => (
                                        <div key={instructions.id}>
                                            <Stack direction="row" sx={{ ml: "10%" }}>
                                                <Box sx={{ mt: 1, mr: 1 }}>
                                                </Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{}}>
                                                    {`${instructions.stepNumber}: ${instructions.description}`}
                                                </Typography>
                                            </Stack>
                                        </div>
                                    ))}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Button>
                                DELETE
                            </Button>
                        </Stack>
                    </Box>
                </div>
            )}
        </motion.div>
    );
};

export default DisplayAddedRecipe;
