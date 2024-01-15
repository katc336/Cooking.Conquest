import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import { useState } from "react"

import { motion } from "framer-motion"

import InformationScroll from "./images/InformationScroll.png"
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
                        variant="h5"
                        sx={{ color: "#362706", mb: 2 }}>
                        Join a guild today and start your journey
                        towards becoming a top-ranking cook earning points for your guild!
                    </Typography>
                    <Card sx={{ border: 5, borderColor: "#862B0D", backgroundColor: "#FFF9C9", m: 3, p: 2 }}>
                        <Typography
                            variant="h5"
                            sx={{ color: "#362706", textAlign: "center" }}>
                            COMING SOON:
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ color: "#362706" }}>
                            Keep an eye out for the Leadership Board to see how your guild and individual cooking skills rank!
                            Once you join a guild, you can compete with others by reviewing and rating each other's recipes, earning points,
                            and contributing to your guild’s cumulative score.
                            This friendly competition and sense of camaraderie within the community will keep you motivated
                            and engaged in your vegetarian cooking conquest.
                        </Typography>
                    </Card>
                </Box>
                <Typography sx={{ textAlign: "center" }}>
                <Button
                        onClick={() => setSeeOldInfo(true)}
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
            </motion.div>

        </div>
    )
}
export default GuildInfoPage