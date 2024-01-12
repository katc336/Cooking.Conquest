import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom";

import { useGetUserQuery } from "../../../../redux/api";

const JoinGuildButton = () => {
    const { data, error, isLoading } = useGetUserQuery();
    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div>
            <Typography sx={{ textAlign: "center" }}>
                <Link to="/join_guild">
                    <Button sx={{
                        m: 5,
                        px: "10%",
                        color: "#445D48",
                        fontSize: "20px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(223, 233, 228, 1)",
                        border: 2,
                        borderBottom: 5,
                        borderColor: "rgba(80, 125, 106, 1)",
                        textTransform: "none"
                    }}>
                        Join a Guild
                    </Button>
                </Link>
            </Typography>
        </div>
    )
}
export default JoinGuildButton