import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

import WizardGastronomer from "../images/WizardGastronomer.png"

const GuildHelpWizard = () => {
    return (
        <div>
            <Box sx={{ ml: "40%", mr: "8%", mt: 10, }}>
                <img
                    src={WizardGastronomer}
                    style={{ position: "absolute", zIndex: -1 }}
                    width="500px" />
                <Box sx={{ pt: "15%", pr: "50%", pl: "5%" }}>
                    <Typography
                        variant="h6"
                        sx={{ color: "#445D48", textAlign: "center" }}>
                         You can now add recipes and help your guild!
                    </Typography>
                    <Typography sx={{ mt: 1, textAlign: "center" }}>
                        <Link to="/information">
                            <Button
                                sx={{ color: "white", borderRadius: "10px", backgroundColor: "#65B741", border: 2, borderBottom: 5, borderColor: "#445D48", textTransform: "none" }}>
                                Learn More
                            </Button>
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}
export default GuildHelpWizard
