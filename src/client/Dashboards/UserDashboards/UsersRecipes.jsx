import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

import { Link } from "react-router-dom"

import { useGetUserQuery } from "../../../redux/api"

const UsersRecipes = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log("UsersRecipes data");
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            {data
                ? //if there is not recipe book item...
                <div>
                    <Box sx={{ mt: "20%", mx: "10%", p: 3, backgroundColor: "rgba(223, 233, 228, 1)", border: 2, borderColor: "#445D48", borderBottom: 5, borderRadius: "20px" }}>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", textAlign: "center", color: "#362706" }}>
                            Want to find recipes to start a cooking quest?
                        </Typography>
                        <Typography sx={{ textAlign: "center" }}>
                            <Link to="/recipes">
                                <Button
                                    sx={{
                                        m: 1,
                                        fontSize: "20px",
                                        color: "white",
                                        borderRadius: "10px",
                                        backgroundColor: "#65B741",
                                        border: 2,
                                        borderBottom: 5,
                                        borderColor: "#445D48",
                                        textTransform: "none"
                                    }}>
                                    Click here to explore new recipes!
                                </Button>
                            </Link>
                        </Typography>
                    </Box>
                </div>
                : //there are recipes...
                <div>
                    TEST
                </div>
            }
        </div>
    )
}
export default UsersRecipes