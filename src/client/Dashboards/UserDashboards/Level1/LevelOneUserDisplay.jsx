import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../../redux/api";
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
                <Box sx={{ mt: 10, ml: 5, pb: 80, mb: 20 }}
                    style={{
                        backgroundImage: `url(${LevelOneUserCard})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Typography sx={{ pt: "100%", px: "10%" }}>
                        Level One:
                    </Typography>
                    <Typography sx={{ px: "10%" }}>
                        To level up, get cooking!
                    </Typography>
                    <Button sx={{ px: "10%" }}>
                        Explore new recipe quests
                    </Button>
                </Box>
            </div>
            : <div />
        </div>
    )
}
export default LevelOneUserDisplay