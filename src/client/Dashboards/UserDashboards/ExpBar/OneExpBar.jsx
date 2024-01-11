import Typography from "@mui/material/Typography"
import OneExp from "./images/OneExp.png"

const OneExpBar = () => {
    return (
        <div>
            <Typography sx={{ mt: 5,  textAlign: "center" }}>
                <img src={OneExp} width="300px" />
            </Typography>
        </div>
    )
}
export default OneExpBar