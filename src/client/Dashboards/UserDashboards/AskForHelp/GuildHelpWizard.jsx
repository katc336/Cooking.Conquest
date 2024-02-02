import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

import WizardGastronomer from "../images/WizardGastronomer.png"

import { useGetUserQuery } from "../../../../redux/api"

const GuildHelpWizard = () => {

    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            {data.isAdmin === true
                ?
                <div>
                    <Box sx={{ ml: "40%", mr: "8%", mt: 10, }}>
                        <img
                            src={WizardGastronomer}
                            style={{ position: "absolute", zIndex: -1 }}
                            width="670px" />
                        <Box sx={{ pt: "20%", pr: "37%", pl: "10%" }}>
                            <Typography
                                variant="h5"
                                sx={{ color: "#445D48", textAlign: "center" }}>
                                Need to go on an Admin Quest?
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "center" }}>
                                <Link to="/admin">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ color: "white", borderRadius: "10px", backgroundColor: "#65B741", border: 2, borderBottom: 5, borderColor: "#445D48", textTransform: "none" }}>
                                        Admin Dashboard
                                    </Button>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </div>
                :
                <div>
                    <Box sx={{ ml: "40%", mr: "8%", mt: 10, }}>
                        <img
                            src={WizardGastronomer}
                            style={{ position: "absolute", zIndex: -2 }}
                            width="610px" />
                        <Box sx={{ pt: "18%", pr: "45%", pl: "10%" }}>
                            <Typography
                                variant="h6"
                                sx={{ color: "#445D48", textAlign: "center" }}>
                                You can now add recipes and help your guild!
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "center" }}>
                                <Link to="/information">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        sx={{ color: "white", borderRadius: "10px", backgroundColor: "#65B741", border: 2, borderBottom: 5, borderColor: "#445D48", textTransform: "none" }}>
                                        Learn More
                                    </Button>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </div>}
        </div>
    )
}
export default GuildHelpWizard
