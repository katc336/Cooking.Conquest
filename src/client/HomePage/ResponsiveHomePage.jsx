import { useMediaQuery, useTheme } from "@mui/material";

import HomePage from "./HomePage";
import MobileHomePage from "./MobileHomePage";
const ResponsiveHomePage = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            {isMobile
                ?
                <div>
                 <MobileHomePage />
                </div>
                :
                <div>
                  <HomePage />
                </div>}
        </div>
    )
}
export default ResponsiveHomePage