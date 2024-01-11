import Typography from "@mui/material/Typography"
import ThreeExp from "./images/ThreeExp.png"

const ThreeExpBar = () => {
    return (
        <div>
            <Typography sx={{ mt: 5,  textAlign: "center" }}>
                <img src={ThreeExp} width="300px" />
            </Typography>
        </div>
    )
}
export default ThreeExpBar