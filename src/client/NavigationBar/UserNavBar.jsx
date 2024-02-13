import { useMediaQuery, useTheme } from '@mui/material';
import WebUserNavBar from './Web/WebUserNavBar';
import MobileUserNavBar from './Mobile/MobileUserNavBar';

const UserNavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>
                    <MobileUserNavBar />
                </div>
                : //if not mobile...
                <div>
                    <WebUserNavBar />
                </div>}
        </div>
    )
}
export default UserNavBar