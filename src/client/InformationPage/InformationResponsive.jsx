import { useMediaQuery, useTheme } from '@mui/material';
import UserInformationDisplay from './Web/UserInformationDisplay';
import MobileUserInformationDisplay from './Mobile/MobileUserInformationDisplay';

const InformationResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>
                    <MobileUserInformationDisplay />
                </div>
                : //if not mobile...
                <div>
                    <UserInformationDisplay />
                </div>}
        </div>
    )
}
export default InformationResponsive