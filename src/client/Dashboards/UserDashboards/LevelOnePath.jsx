import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const LevelOnePath = () => {
    return (
        <div>
            <Grid container sx={{ mt: 5 }}>
                {/* <--------ROW 1--------> */}
                <Grid item xs={4}></Grid>
                <Grid item xs={1}>
                    <Card sx={{ backgroundColor: "#FFF47D", border: 1, borderBottom: 5, borderRadius: "100%", borderColor: "#FED049", height: "70px", width: "70px" }}>

                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}></Grid>
                {/* <--------ROW 2--------> */}
                <Grid item xs={4}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Card sx={{ backgroundColor: "#FFF47D", border: 1, borderBottom: 5, borderRadius: "100%", borderColor: "#FED049", height: "70px", width: "70px" }}>

                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}></Grid>
                {/* <--------ROW 3--------> */}
                <Grid item xs={4}></Grid>
                <Grid item xs={1}> </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Card sx={{ backgroundColor: "#FFF47D", border: 1, borderBottom: 5, borderRadius: "100%", borderColor: "#FED049", height: "70px", width: "70px" }}>

                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}></Grid>
                {/* <--------ROW 4--------> */}
                <Grid item xs={4}></Grid>
                <Grid item xs={1}> </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                    <Card sx={{ backgroundColor: "#FFF47D", border: 1, borderBottom: 5, borderRadius: "100%", borderColor: "#FED049", height: "70px", width: "70px" }}>

                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

        </div>
    )
}
export default  LevelOnePath