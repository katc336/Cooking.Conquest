import { useMediaQuery, useTheme } from '@mui/material';
import WebNonUserNavBar from './Web/WebNonUserNavBar';
import MobileNonUserNavBar from './Mobile/MobileNonUseNav';


const NonUserNavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>
                    {/* <MobileNonUserNavBar /> */}
                </div>
                : //if not mobile...
                <div>
                    <WebNonUserNavBar />
                </div>}
        </div>
    )
}
export default NonUserNavBar