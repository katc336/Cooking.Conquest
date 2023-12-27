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
                {data.title}
            </Typography>

        </div>
    )
}
export default SingleRecipe