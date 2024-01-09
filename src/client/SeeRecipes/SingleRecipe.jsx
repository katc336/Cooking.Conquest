import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../redux/api"

import SingleRecipeBorder from "./SingleRecipeBorder.png"

const SingleRecipe = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleRecipeQuery(id);

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
            {data &&
                <Box
                    sx={{ pb: 200 }}
                    style={{
                        backgroundImage: `url(${SingleRecipeBorder})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography>
                        {data.name}
                    </Typography>
                </Box>}
        </motion.div>
    )
}
export default SingleRecipe