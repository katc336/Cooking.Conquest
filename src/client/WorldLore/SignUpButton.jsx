import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

import { useGetUserQuery } from "../../redux/api"

const SignUpButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log("SignUp" + data)
    }
    return (
        <div>
            {!data
                ? //If there is no user...
                <div>
                    <Typography sx={{ textAlign: "center" }}>
                        <Link to="/register">
                            <Button
                                variant="contained"
                                color="success"
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
                                Sign up and become a Gourmet Apprentice. Your culinary journey awaits!
                            </Button>
                        </Link>
                    </Typography>
                </div>
                : //If user is logged in...
                <div />}

        </div>
    )
}
export default SignUpButton