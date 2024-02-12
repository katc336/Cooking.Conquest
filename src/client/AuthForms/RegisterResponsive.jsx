import { useMediaQuery, useTheme } from '@mui/material';
import RegisterForm from './Web/RegisterForm';
import MobileRegisterForm from './Mobile/MobileRegisterForm';

const RegisterResponsive = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <div>
            {isMobile
                ? //if mobile...
                <div>
                    <MobileRegisterForm />
                </div>
                : //if not mobile...
                <div>
                    <RegisterForm />
                </div>}
        </div>
    )
}
export default RegisterResponsive