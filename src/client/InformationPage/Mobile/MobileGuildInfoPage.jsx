import Card from "@mui/material/Card"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

import { useState } from "react"

import { motion } from "framer-motion"

import MobileCookingConquestInfoPage from "./MobileCookingConquestInfoPage"

const MobileGuildInfoPage = () => {
    const [seeOldInfo, setSeeOldInfo] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Card
                elevation={10}
                sx={{ m: 3, p: 1, backgroundImage: "radial-gradient(circle, #fffedd, #fffed9, #fffed5, #fffed1, #fffecd, #fdfac5, #fbf5bc, #f9f1b4, #f5e7a6, #f0dc99);" }}>
                <Typography
                    variant="h5"
                    sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
                    Congratulations!
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: "#362706", textAlign: "center", mb: 2 }}>
                    You've completed your training and are now a Gastronomer!
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    Here at Cooking Conquest, growing as a cook is a community-centered experience
                    where users can interact, share, and compete with each other as they grow their skills.
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    Now that you've completes level 3 and are promoted to a Gastonomer,
                    you have the opportunity to join a “guild” within the Cooking Conquest community.
                </Typography>
                <Typography
                    sx={{ color: "#362706", mb: 2 }}>
                    Guilds are groups of users who collaborate to create and share new vegetarian recipes.
                    Within guilds, you can compete by reviewing and rating each other's recipes,
                    earning points, and contributing to a guild’s cumulative score.
                </Typography>
                <Typography
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
                {seeOldInfo && <MobileCookingConquestInfoPage />}
            </Card>
        </motion.div>
    )
}
export default MobileGuildInfoPage