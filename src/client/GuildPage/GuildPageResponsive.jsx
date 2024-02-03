import { useMediaQuery, useTheme } from "@mui/material";

import LeadershipBoard from "./Web/LeadershipBoard";

const GuildPageResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ?
                <div>

                </div>
                :
                <div>
                    <LeadershipBoard />
                </div>}
        </div>
    )
}
export default GuildPageResponsive