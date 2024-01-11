import Typography from "@mui/material/Typography"
import TwoExp from "./images/TwoExp.png"

const TwoExpBar = () => {
    return (
        <div>
            <Typography sx={{ mt: 5,  textAlign: "center" }}>
                <img src={TwoExp} width="300px" />
            </Typography>
        </div>
    )
}
export default TwoExpBar