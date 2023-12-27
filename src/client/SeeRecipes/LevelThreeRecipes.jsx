import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelThreeRecipesQuery } from "../../redux/api"

import LockedRecipeIcon from "./LockedRecipeIcon.png"
import LockedRecipe from "./LockedRecipe"

const LevelThreeRecipes = () => {

    const { data, error, isLoading } = useGetLevelThreeRecipesQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
          <LockedRecipe/>
        </div>
    )
}
export default LevelThreeRecipes