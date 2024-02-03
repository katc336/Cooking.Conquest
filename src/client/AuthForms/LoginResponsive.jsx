import { useMediaQuery, useTheme } from '@mui/material';
import LoginForm from './Web/LoginForm';

const LoginResponsive = () => {
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
                    <LoginForm />
                </div>}
        </div>
    )
}
export default LoginResponsive