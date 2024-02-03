import { useState } from "react";

import { motion } from "framer-motion";

import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoginIcon from '@mui/icons-material/Login';
import { useMediaQuery, useTheme } from '@mui/material';

import { Link, useNavigate } from "react-router-dom";

import { useRegisterMutation } from "../../../redux/api";

import Scroll from "../AuthScroll.png"

const RegisterForm = () => {
    const [alert, setAlert] = useState(true);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [email, setEmail] = useState("");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();

    const [register, { data, error, isLoading }] = useRegisterMutation();

    if (error) {
        return <div>{error}</div>
    }

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
            const result = await register({ username, name, email, password, secondPassword });
            console.log("Success!")
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
            {alert &&
                <Card sx={{ mt: 20, border: 5, borderColor: "#862B0D", borderRadius: "20px", backgroundColor: "#FFF9C9", mx: 40, p: 3 }}>
                    <Typography 
                    sx={{ color: "#362706", textAlign: "center" }}
                        variant="h4">
                        Thanks for Signing Up!
                    </Typography>
                    <Typography 
                    sx={{ color: "#362706", textAlign: "center" }}
                    variant="h6">
                        Before you sign up, we wanted to inform you that as of now, Cooking Conquest is just a demo,
                        and account data will be erased during updates.
                    </Typography>
                    <Link to="https://github.com/katc336/Cooking.Conquest">
                        <Typography sx={{ color: "#362706", textAlign: "center" }}>
                            Visit Cooking Conquest's GitHub to see progress!
                        </Typography>
                    </Link>
                    <Typography sx={{ textAlign: "center" }}>
                        <Button onClick={() => setAlert(false)}
                            variant="contained"
                            color="success"
                            sx={{
                                mt: 5,
                                fontSize: "20px",
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Close and Continue to Sign Up Page
                        </Button>
                    </Typography>
                </Card>
            }
            {!alert &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}>
                    <Box
                        sx={{ mt: 15, mx: "5%", pb: 30 }}
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
                                    <Typography variant="h4" sx={{ color: "#445D48", textAlign: "center", p: 1 }}>
                                        Sign Up:
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <Stack direction="column">
                                            <TextField
                                                label="Enter Your Name"
                                                value={name}
                                                onChange={(event) => setName(event.target.value)}
                                                size="small"
                                                variant="filled"
                                                sx={{ m: 1 }}
                                            />
                                            <TextField
                                                label="Enter Username"
                                                value={username}
                                                onChange={(event) => setUsername(event.target.value)}
                                                size="small"
                                                variant="filled"
                                                sx={{ m: 1 }}
                                            />
                                            <TextField
                                                label="Enter E-mail"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
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
                                            <TextField
                                                label="Re-enter Password"
                                                value={secondPassword}
                                                type="password"
                                                onChange={(event) => setSecondPassword(event.target.value)}
                                                size="small"
                                                variant="filled"
                                                error={
                                                    !!(password && secondPassword !== secondPassword)
                                                }
                                                sx={{ m: 1 }}
                                                helperText={
                                                    password && secondPassword && password !== secondPassword ?
                                                        <Alert severity="error"> Passwords do not match </Alert> : null
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
                                                                p: 1,
                                                                my: 1,
                                                                fontSize: "20px",
                                                                color: "white",
                                                                borderRadius: "10px",
                                                                backgroundColor: "#65B741",
                                                                border: 2,
                                                                borderBottom: 5,
                                                                borderColor: "#445D48",
                                                                textTransform: "none"
                                                            }}>
                                                            Sign Up
                                                        </Button>
                                                        <Typography sx={{ mt: 2, color: "#445D48", textAlign: "center" }}>
                                                            Already have an account?
                                                        </Typography>
                                                        <Link to="/login">
                                                            <Button
                                                                variant="outlined"
                                                                sx={{
                                                                    my: 1,
                                                                    width: "100%",
                                                                    fontSize: "20px",
                                                                    color: "white",
                                                                    borderRadius: "10px",
                                                                    backgroundColor: "#65B741",
                                                                    border: 2,
                                                                    borderBottom: 5,
                                                                    borderColor: "#445D48",
                                                                    textTransform: "none"
                                                                }}>
                                                                Login to your account
                                                                <LoginIcon sx={{ color: "#205375" }} />
                                                            </Button>
                                                        </Link>
                                                    </Typography>
                                                </div>
                                                ://is NOT mobile... 
                                                <div>
                                                    <Typography sx={{ color: "#445D48", textAlign: "center" }}>
                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            color="success"
                                                            sx={{
                                                                p: 1,
                                                                my: 1,
                                                                fontSize: "20px",
                                                                color: "white",
                                                                borderRadius: "10px",
                                                                backgroundColor: "#65B741",
                                                                border: 2,
                                                                borderBottom: 5,
                                                                borderColor: "#445D48",
                                                                textTransform: "none"
                                                            }}>
                                                            Start Your Cooking Journey
                                                        </Button>
                                                        <Typography sx={{ mt: 2, color: "#445D48", textAlign: "center" }}>
                                                            Already have an account?
                                                        </Typography>
                                                        <Link to="/login">
                                                            <Button sx={{ color: "#445D48", textTransform: "none", my: 1 }}>
                                                                Login to your account
                                                                <LoginIcon sx={{ ml: 2, color: "#445D48" }} />
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
                </motion.div>}
        </motion.div>
    )
}
export default RegisterForm