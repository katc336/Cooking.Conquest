import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../redux/api";
import MobileUserDashboard from "./MobileUserDashboard";


const UserDashboard = () => {
    const { data, error, isLoading } = useGetUserQuery();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    if (error) {
        return <>{error}</>
    }
    console.log(data)
    return (
        <>
           <Typography>
            Hello {data.username}
           </Typography>
        </>
    )
}
export default UserDashboard