import Button from "@mui/material/Button";
import Typography  from "@mui/material/Typography";

import { useGetUserQuery } from "../../../redux/api";

const AddRecipeButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (data) {
        console.log(data)
    }
    if (!data) {
        console.log("No logged in user")
    }
    if (error) {
        console.log({ error })
    }
    return (
        <div>
            {data
                ? //if there's a user...
                <div>
                    <Typography sx={{ textAlign: "center" }}>
                        <Button sx={{
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
                            Add Recipe to My Recipe Book
                        </Button>
                    </Typography>
                </div>
                : //if not a user, return an empty div
                <div>
                </div>}
        </div>
    )
}
export default AddRecipeButton