import { useMediaQuery, useTheme } from '@mui/material';
import LoginForm from './Web/LoginForm';
import MobileLoginForm from './Mobile/MobileLogin';

const LoginResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>
                    <MobileLoginForm />
                </div>
                : //if not mobile...
                <div>
                    <LoginForm />
                </div>}
        </div>
    )
}
export default LoginResponsive