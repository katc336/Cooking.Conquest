import Typography from "@mui/material/Typography"
import ZeroExp from "./images/ZeroExp.png"

const ZeroExpBar = () => {
    return (
        <div>
            <Typography sx={{ mt: 5,  textAlign: "center" }}>
                <img src={ZeroExp} width="300px" />
            </Typography>
        </div>
    )
}
export default ZeroExpBar