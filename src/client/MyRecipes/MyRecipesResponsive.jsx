import { useMediaQuery, useTheme } from '@mui/material';
import MyRecipes from './Web/MyRecipes';

const MyRecipesResponsive = () => {
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
                    <MyRecipes />
                </div>}
        </div>
    )
}
export default MyRecipesResponsive