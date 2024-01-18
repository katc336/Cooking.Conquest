import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { useGetUserQuery } from "../../redux/api";

const AddRecipeNavButton = () => {
    const { data, error, isLoading } = useGetUserQuery()
    if (isLoading) {
        return null
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console(error)
    }
    return (
        <div>
            {data && data.level !== 4
                ? //if not level 4...
                <div />
                : //if level 4...
                <div>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", mb: 1 }}>
                        Congragulations! 
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", mb: 1 }}>
                        You can now add your own recipes
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        <Link to="/add_recipes">
                            <Button
                                variant="contained"
                                color="success"
                                sx={{
                                    p: 1,
                                    fontSize: "20px",
                                    color: "white",
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                    textTransform: "none"
                                }}>
                                Click here to add your own recipe
                            </Button>
                        </Link>
                    </Typography>
                </div>
            }
        </div>
    )
}
export default AddRecipeNavButton