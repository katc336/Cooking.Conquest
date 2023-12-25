import { Box, Button, Typography } from "@mui/material";

import { Link } from "react-router-dom"; 

import { useGetUserQuery } from "../../redux/api";

import LevelScroll from "./LevelScroll.png"
import LevelOneRecipes from "./LevelOneRecipes";
import LevelTwoRecipes from "./LevelTwoRecipes";
import LevelThreeRecipes from "./LevelThreeRecipes";

const RecipesPage = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            <Box
                sx={{ minHeight: "900px", pt: "12%", mt: 15 }}
                style={{
                    backgroundImage: `url(${LevelScroll})`,
                    width: "100vw",
                    height: "100vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}>
                {!data
                    ? //if no user...
                    <div> 
                        <LevelOneRecipes />
                        <Typography variant="h5" sx={{ my: 5, color: "#445D48", fontFamily: "Marker Felt, fantasy", textAlign: "center" }}>
                            What to unlock more recipes?
                        </Typography>
                        <Link to="/register">
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    mx: "40%",
                                    fontSize: "20px",
                                    fontFamily: "Tahoma",
                                    color: "white",
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                    textTransform: "none"
                                }}>
                                Sign Up and Begin A Culinary Quest
                            </Button>
                        </Link>
                    </div>
                    : //if there is a user...
                    <div>
                        <LevelOneRecipes />
                        <LevelTwoRecipes />
                        <LevelThreeRecipes />
                    </div>}
            </Box>
        </div>
    )
}
export default RecipesPage


