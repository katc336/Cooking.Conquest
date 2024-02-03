import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

import { useState } from "react"

import { motion } from "framer-motion"

import InformationScroll from "../images/InformationScroll.png"
import CookingConquestInfoPage from "./CookingConquestInfoPage"

const GuildInfoPage = () => {
    const [seeOldInfo, setSeeOldInfo] = useState(false)
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}>
                <Box
                    sx={{ mx: "5%", mt: "5%", pt: "15%", px: "17%" }}
                    style={{
                        backgroundImage: `url(${InformationScroll})`,
                        backgroundSize: "cover",
                        width: "60%",
                        backgroundRepeat: "no-repeat",
                    }}>
                    {/* <-------------------Row 1-------------------> */}
                    <Typography
                        variant="h3"
                        sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
                        Congratulations!
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
                        You've completed your training and are now a Gastronomer!
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#362706", mb: 2 }}>
                        Here at Cooking Conquest, growing as a cook is a community-centered experience
                        where users can interact, share, and compete with each other as they grow their skills.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#362706", mb: 2 }}>
                        Now that you've completes level 3 and are promoted to a Gastonomer,
                        you have the opportunity to join a “guild” within the Cooking Conquest community.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#362706", mb: 2 }}>
                        Guilds are groups of users who collaborate to create and share new vegetarian recipes.
                        Within guilds, you can compete by reviewing and rating each other's recipes,
                        earning points, and contributing to a guild’s cumulative score.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ color: "#362706", mb: 2 }}>
                        Join a guild today and start your journey
                        towards becoming a top-ranking cook earning points for your guild!
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        <Link to="/leadership_board">
                            <Button
                                onClick={() => setSeeOldInfo(true)}
                                variant="contained"
                                color="success"
                                sx={{
                                    mb: 10,
                                    color: "white",
                                    borderRadius: "10px",
                                    backgroundColor: "#65B741",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "#445D48",
                                    textTransform: "none"
                                }}>
                                Click here to see the guild's scores!
                            </Button>
                        </Link>
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                        <Button
                            onClick={() => setSeeOldInfo(true)}
                            variant="contained"
                            color="success"
                            sx={{
                                color: "white",
                                borderRadius: "10px",
                                backgroundColor: "#65B741",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "#445D48",
                                textTransform: "none"
                            }}>
                            Click here to read information about levels 1 through 3
                        </Button>
                    </Typography>
                    {seeOldInfo && <CookingConquestInfoPage />}
                </Box>

            </motion.div>

        </div>
    )
}
export default GuildInfoPage