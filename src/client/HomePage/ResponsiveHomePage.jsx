import { useMediaQuery, useTheme } from "@mui/material";

import WebHomePage from "./WebHomePage";
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
                  <WebHomePage />
                </div>}
        </div>
    )
}
export default ResponsiveHomePage