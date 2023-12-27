import { Box, Card, Typography, Stack, Tooltip } from "@mui/material"

import { Link } from "react-router-dom"

import { useGetLevelTwoRecipesQuery } from "../../redux/api";

import LockedRecipe from "./LockedRecipe"

const LevelTwoRecipes = () => {
    const { data, error, isLoading } = useGetLevelTwoRecipesQuery();
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
export default LevelTwoRecipes