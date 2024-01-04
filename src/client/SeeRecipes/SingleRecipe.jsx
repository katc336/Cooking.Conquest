import { useState } from "react";
import { useParams } from 'react-router';

import { useGetSingleRecipeQuery } from "../../redux/api"
import { Typography } from "@mui/material";

const SingleRecipe = () =>{
    const { id } = useParams();
    const { data, error, isLoading } = useGetSingleRecipeQuery(id);
    if (data) {
        console.log(data);
    }
    if (error){
        console.log(error);
    }
    return(
        <div>
            <Typography>
            <Box
                    sx={{ mt: 10, ml: 15 }}
                    style={{
                        backgroundImage: `url(${LevelCard})`,
                        width: "45%",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div>
                        <Box>
                        {data.title}
                            <Button color="success" sx={{ textTransform: "none", mt: "30%", ml: "10%" }}>
                                Add Recipe
                            </Button>
                        </Box>
                    </div>
                </Box>
            </Typography>

        </div>
    )
}
export default SingleRecipe