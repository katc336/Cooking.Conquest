import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom";

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../../redux/api";
import LevelOneHand from "./LevelOneHand.png"
import LevelOneUserCard from "./LevelOneUserCard.png"


const LevelOneUserDisplay = () => {
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
                <Box sx={{ mt: 10, ml: 5, mb: 20 }}
                    style={{
                        backgroundImage: `url(${LevelOneUserCard})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography
                        variant="h4"
                        sx={{ color: "rgba(223, 233, 228, 1)", pt: "100%", textAlign: "center" }}>
                        Level One:
                    </Typography>
                    <Typography sx={{ textAlign: "center", m: 2 }}>
                        <img src={LevelOneHand} width="150px" />
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "rgba(223, 233, 228, 1)", textAlign: "center" }}>
                        To level up, get cooking!
                    </Typography>
                    <Link to="/recipes">
                        <Button
                            sx={{
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
                            Find New Recipes
                        </Button>
                    </Link>
                </Box>
            </div>
            : <div />
        </div>
    )
}
export default LevelOneUserDisplay