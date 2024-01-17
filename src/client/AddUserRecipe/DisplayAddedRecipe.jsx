import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { motion } from 'framer-motion';

import { useGetSingleUsersRecipeQuery, useGetSingleUsersIngredientsQuery, useGetSingleUserInstructionsQuery } from '../../redux/api';

const DisplayAddedRecipe = ({ id }) => {
    const { data, error, isLoading } = useGetSingleUsersRecipeQuery(id);
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}>
            {data && (
                <div>
                    <Box sx={{ p: 3, m: 3, backgroundColor: '#FFF8E3', borderRadius: '20px' }}>
                        <Typography
                         variant="h4"
                         sx={{ textAlign: "center"}}>
                            {data.name}
                        </Typography>
                        <Typography>
                          Description: {data.description}
                        </Typography>
                    </Box>
                </div>
            )}
        </motion.div>
    );
};

export default DisplayAddedRecipe;
