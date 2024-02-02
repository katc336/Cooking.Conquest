import Card from "@mui/material/Card"
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import MapAllUsers from "./MapAllUsers";

import { Link } from "react-router-dom";


const WebAdminDashboard = () => {


    return (
        <div>
            <Grid
                container
                sx={{ mt: 15 }}>
                <Grid item xs={2}>
                    <Link to="/account">
                        <Button
                            sx={{
                                ml: 3,
                                mt: 3,
                                p: 1,
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Return to Userdashboard
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={10}>
                    <Card sx={{ 
                        borderRadius: "50px",
                        mx: 3,
                        backgroundImage: "radial-gradient(circle, #0f6700, #0f6700, #0f6700, #0f6700, #0f6700, #196f05, #21780a, #298010, #3b931c, #4ca727, #5dbb32, #6fd03d)" }}>
                        <MapAllUsers />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default WebAdminDashboard