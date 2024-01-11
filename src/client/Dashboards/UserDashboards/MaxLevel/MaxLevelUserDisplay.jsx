import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom";

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../../redux/api";
import MaxLevelCard from "./MaxLevelCard.png"


const MaxLevelUserDisplay = () => {
    const { data, error, isLoading } = useGetUserQuery();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            <div>
                <Box sx={{ mt: 10, pb: 30 }}
                    style={{
                        backgroundImage: `url(${MaxLevelCard})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h4"
                        sx={{ color: "rgba(223, 233, 228, 1)", pt: "100%", textAlign: "center" }}>
                        You've completed your training!
                    </Typography>
                </Box>
            </div>
        </div>
    )
}
export default MaxLevelUserDisplay