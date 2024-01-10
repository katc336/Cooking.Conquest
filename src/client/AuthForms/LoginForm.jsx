import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import { Box } from "@mui/material/"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoginIcon from '@mui/icons-material/Login';
import { useMediaQuery, useTheme } from '@mui/material';

import { useLoginMutation } from "../../redux/api";

import Scroll from "./AuthScroll.png"

const LoginForm = () => {

    const [login, { data, error }] = useLoginMutation();
    if (error) {
        return <div>{error}</div>
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            if (password.length < 8) {
                event.preventDefault();
                alert("Password is too short.");
                return
            }
            else if (password.length > 16) {
                event.preventDefault();
                alert("Password is too long.");
                return
            }
            event.preventDefault();
            const result = await login({ username, password })
            console.log(result)
            navigate("/account")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
            <Box
                sx={{ mx: "5%", pb: 40 }}
                style={{
                    backgroundImage: `url(${Scroll})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}>
                <Grid container sx={{ mt: 10 }}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ p: 5 }}>
                            <Typography
                                variant="h4"
                                sx={{ mt: 10, color: "#445D48", textAlign: "center", p: 1 }}>
                                Login:
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Stack direction="column">
                                    <TextField
                                        label="Enter Login Username"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        size="small"
                                        variant="filled"
                                        sx={{ m: 1 }}
                                    />
                                    <TextField
                                        label="Enter Password"
                                        value={password}
                                        type="password"
                                        onChange={(event) => setPassword(event.target.value)}
                                        size="small"
                                        variant="filled"
                                        sx={{ m: 1 }}
                                        helperText={
                                            password && password.length < 8
                                                ? <Alert severity="error"> Your password needs to be at least 8 characters long </Alert>
                                                : password.length > 16 ? <Alert severity="error"> Your password cannot be more than 16 characters long </Alert>
                                                    : null
                                        }
                                    />
                                    {isMobile ?
                                        <div>
                                            <Typography sx={{ color: "#445D48", textAlign: "center" }}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="success"
                                                    sx={{
                                                        width: "100%",
                                                        p: 1,
                                                        fontSize: "20px",
                                                        fontFamily: "Tahoma",
                                                        color: "white",
                                                        borderRadius: "10px",
                                                        backgroundColor: "#65B741",
                                                        border: 2,
                                                        borderBottom: 5,
                                                        borderColor: "#445D48",
                                                        textTransform: "none"
                                                    }}>
                                                    Login
                                                </Button>
                                                <Typography sx={{ mt: 2, color: "#445D48", textAlign: "center" }}>
                                                    Don't have an account?
                                                </Typography>
                                                <Link to="/register">
                                                    <Button
                                                        sx={{
                                                            my: 1,
                                                            width: "100%",
                                                            color: "#445D48",
                                                            textTransform: "none"
                                                        }}>
                                                        Sign up!
                                                        <LoginIcon sx={{ ml: 2 }} />
                                                    </Button>
                                                </Link>
                                            </Typography>
                                        </div>
                                        ://is NOT mobile... 
                                        <div>
                                            <Typography sx={{ textAlign: "center" }}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="success"
                                                    sx={{
                                                        p: 1,
                                                        fontSize: "20px",
                                                        fontFamily: "Tahoma",
                                                        color: "white",
                                                        borderRadius: "10px",
                                                        backgroundColor: "#65B741",
                                                        border: 2,
                                                        borderBottom: 5,
                                                        borderColor: "#445D48",
                                                        textTransform: "none"
                                                    }}>
                                                    Login
                                                </Button>
                                                <Typography sx={{ mt: 2 }}>
                                                    Don't have an account?
                                                </Typography>
                                                <Link to="/register">
                                                    <Button
                                                        sx={{
                                                            my: 1,
                                                            textTransform: "none",
                                                            color: "#445D48"
                                                        }}>
                                                        Sign up!
                                                        <LoginIcon sx={{ color: "#205375" }} />
                                                    </Button>
                                                </Link>
                                            </Typography>
                                        </div>}
                                </Stack>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </Box>
        </motion.div>
    )
}
export default LoginForm