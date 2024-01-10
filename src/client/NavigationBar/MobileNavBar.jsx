import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Link } from "react-router-dom";

const MobileNavBar = () => {
    return (
        <div>
            <Accordion sx={{ backgroundColor: "transparent" }}>
                <AccordionSummary>
                    <MoreVertIcon />
                    <Stack direction="row">
                        LOGO
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to="/">
                        <Button
                            sx={{
                                mx: 1,
                                color: "#445D48",
                                fontFamily: "Tahoma",
                                textTransform: "none"
                            }}>
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Button>
                    </Link>
                </AccordionDetails>
                <AccordionDetails>
                    <Link to="/recipes">
                        <Button
                            sx={{
                                mx: 1,
                                color: "#205375",
                                fontFamily: "Tahoma",
                                textTransform: "none"
                            }}>
                            <Typography variant="h6">
                                See Recipes
                            </Typography>
                        </Button>
                    </Link>
                </AccordionDetails>
            </Accordion>
            <Grid container>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}
export default MobileNavBar