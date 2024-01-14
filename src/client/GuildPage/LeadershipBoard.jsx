import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"

const LeadershipBoard = () => {
    return (
        <div>
            <Card sx={{ mt: "10%", mx: "10%", border: 5, borderColor: "#862B0D", backgroundColor: "#FFF9C9", p: 2 }}>
                <Typography
                    variant="h5"
                    sx={{ m: 3, color: "#362706", textAlign: "center" }}>
                    COMING SOON:
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706" }}>
                    Keep an eye out for the Leadership Board to see how your guild and individual cooking skills rank!
                    Once you join a guild, you can compete with others by reviewing and rating each other's recipes, earning points,
                    and contributing to your guild’s cumulative score.
                    This friendly competition and sense of camaraderie within the community will keep you motivated
                    and engaged in your vegetarian cooking conquest.
                </Typography>
            </Card>
        </div>
    )
}
export default LeadershipBoard