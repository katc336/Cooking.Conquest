import { useMediaQuery, useTheme } from '@mui/material';

const NavResponsive = () => {
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
                </div>}
        </div>
    )
}
export default NavResponsive