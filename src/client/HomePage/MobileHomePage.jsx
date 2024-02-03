import { Box, Card, Button, Grid, Stack, Typography } from "@mui/material"

import { Link } from "react-router-dom";

import Logo from "./images/Logo.png"
import HomeScroll from "./images/HomeScroll.png"
import CookingConquestInfo from "../InformationPage/Web/CookingConquestInfoPage";
const MobileHomePage = () => {
    return (
        <div>
            <Card sx={{ backgroundColor: "rgba(223, 233, 228, 1)", p: 2, m: 2 }}>
                <Typography
                    variant="h3"
                    sx={{ textAlign: "center" }}>
                    COMING SOON:
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}>
                    Sorry, this app is not mobile compatible yet.
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}>
                    Please use a computer or laptop to access
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center" }}>
                    The mobile feature is coming in February 2024.
                </Typography>
            </Card>
        </div>
    )
}
export default MobileHomePage