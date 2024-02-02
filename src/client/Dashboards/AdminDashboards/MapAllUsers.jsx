import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from "@mui/material/Card"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"

import { useAdminDeleteRecipeMutation, useAdminGetAllUsersQuery } from "../../../redux/api"
import DeleteUserButton from './DeleteUserButton';

const MapAllUsers = () => {
    const { data, isLoading, error } = useAdminGetAllUsersQuery();
    const [deleteRecipe] = useAdminDeleteRecipeMutation();
    if (isLoading) {
        return null
    }
    if (error) {
        console.error(error)
    }
    return (
        <div>
            {data && data.map((user) => (
                <div key={user.id}>
                    <Card sx={{
                        m: 3,
                        p: 3,
                        borderRadius: "50px",
                        backgroundImage: "radial-gradient(circle, #fbffdb, #f9fed4, #f7fdce, #f5fcc7, #f3fbc1, #f2fabc, #f0fab6, #eff9b1, #eef9ab, #eef8a6, #edf8a0, #edf79a);"
                    }}>
                        <Grid container>
                            <Grid item xs={5}>
                                <Card
                                    elevation={10}
                                    sx={{ mx: 3, my: 1, backgroundColor: "#FBFFDB", px: 3, borderRadius: "50px" }}>
                                    <Typography variant="h6">
                                        name: {user.name}
                                    </Typography>
                                </Card>
                                <Card
                                    elevation={10}
                                    sx={{ mx: 3, my: 1, backgroundColor: "#FBFFDB", px: 3, borderRadius: "50px" }}>
                                    <Typography variant="h6">
                                        username: {user.username}
                                    </Typography>
                                </Card>
                                <Card
                                    elevation={10}
                                    sx={{ mx: 3, my: 1, backgroundColor: "#FBFFDB", px: 3, borderRadius: "50px" }}>
                                    {user.guild === null
                                        ?
                                        <div>
                                            <Typography variant="h6">
                                                guild: none
                                            </Typography>
                                        </div>
                                        :
                                        <div>
                                            <Typography variant="h6">
                                                guild: {user.guild.name}
                                            </Typography>
                                        </div>
                                    }
                                </Card>
                                <DeleteUserButton
                                    id={user.id} />
                            </Grid>
                            <Grid item xs={7}>
                                <Accordion sx={{ backgroundColor: "#FBFFDB" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography
                                            variant="h6">
                                            {user.name}'s Posted Recipes
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {user.userPostedRecipes.map((recipe) => (
                                            <Typography>
                                                {recipe.name}
                                            </Typography>
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default MapAllUsers