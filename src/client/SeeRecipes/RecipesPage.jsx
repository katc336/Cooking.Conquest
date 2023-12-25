import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { useGetAllRecipesQuery } from "../../redux/api"

import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import LevelScroll from "./LevelScroll.png"
import LevelOneRecipes from "./LevelOneRecipes";


const RecipesPage = () => {

    return (
        <div>
             <Box
                sx={{ minHeight: "900px", pt: "12%", mt: 15  }}
                style={{
                    backgroundImage: `url(${LevelScroll})`,
                    width: "100vw",
                    height: "100vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}>
                <LevelOneRecipes />
            </Box>
        </div>
    )
}
export default RecipesPage


