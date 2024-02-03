import { useMediaQuery, useTheme } from '@mui/material';
import UserInformationDisplay from './Web/UserInformationDisplay';

const InformationResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>

                </div>
                : //if not mobile...
                <div>
                    <UserInformationDisplay />
                </div>}
        </div>
    )
}
export default InformationResponsive