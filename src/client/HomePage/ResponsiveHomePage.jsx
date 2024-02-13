import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

import WebHomePage from "./WebHomePage";
import MobileHomePage from "./MobileHomePage";
import Logo from "./images/Logo.png"

const ResponsiveHomePage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            {isMobile
                ?
                <div>
                    <Card
                        elevation={10}
                        sx={{ m: 3, p: 1, backgroundImage: "radial-gradient(circle, #fffedd, #fffed9, #fffed5, #fffed1, #fffecd, #fdfac5, #fbf5bc, #f9f1b4, #f5e7a6, #f0dc99);" }}>
                        <Typography
                            variant="h4"
                            sx={{ textAlign: "center", my: 2 }}>
                            Welcome to Cooking Conquest!
                        </Typography>
                        <Typography sx={{ textAlign: "center" }}>
                            <img src={Logo} alt="Illustration of 3 cooks" width="200px" />
                        </Typography>
                        <Typography
                            sx={{ mx: 3, mb: 1 }}
                            variant="h5">
                            Cooking Conquest is not compatible with mobile devices yet.
                        </Typography>
                        <Typography
                            sx={{ mx: 3, mb: 1 }}
                            variant="h5">
                            Please use a laptop or desktop to start your culinary quest!
                        </Typography>
                    </Card>
                    {/* <MobileHomePage /> */}
                </div>
                :
                <div>
                    <WebHomePage />
                </div>}
        </div>
    )
}
export default ResponsiveHomePage