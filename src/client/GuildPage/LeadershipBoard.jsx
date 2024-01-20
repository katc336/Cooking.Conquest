import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import { useGetAllGuildsQuery } from "../../redux/api"

import GreenSageIcon from "./images/GreenSageIcon.png"
import LeafSongIcon from "./images/LeafSongIcon.png"
import GastrognomeIcon from "./images/GastrognomeIcon.png"
import GuildScroll from "./images/GuildScroll.png"

const LeadershipBoard = () => {
    const { data, error, isLoading } = useGetAllGuildsQuery()

    if (isLoading) {
        console.log("Loading...")
        return null
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <img
                src={GuildScroll}
                alt="Ancient scroll image in the background"
                style={{ position: "absolute", zIndex: -1, width: "100vw" }} />
            <Box sx={{ mx: 5, mt: 15, px: 5 }}>
                <Stack direction="row">
                    {data && data.map((guild) => (
                        <div key={guild.id}>
                            <Box sx={{
                                p: 2,
                                mx: 1,
                                mt: 5,
                                width: "400px",
                                minHeight: "550px",
                                color: "#445D48",
                            }}>
                                <Typography
                                    variant="h6"
                                    sx={{ textAlign: "center", mb: 2 }}>
                                    {guild.name}
                                </Typography>
                                <Box sx={{ m: 1, backgroundColor: "#FFF8E3", borderColor: "#445D48", border: 1, borderRadius: "20px" }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ textAlign: "center", my: 1 }}>
                                        Score: {guild.score}
                                    </Typography>
                                </Box>
                                <Typography sx={{ textAlign: "center" }}>
                                    {guild.name === "Order of the Gastrognomes" ? <img src={GastrognomeIcon} width="150px" alt="Picture of the Order of the Gastrognomes Shield. To the sides are two immersion blenders, showing off the use of newer equipment and experimentation. In the center is a gnome with sun glasses to represent the cooler modern vibe of this guild." style={{ marginBottom: "43px" }} /> : <div />}
                                    {guild.name === "Leafsong Epicurean Fellowship" ? <img src={LeafSongIcon} width="150px" alt="Picture of the Leafsong Epicurean Fellowship Shield. It has a leaf in the background, with a bowl of comforting curry tofu underneath. Atop are music notes coming out to represent how comforting food sings to the soul." /> : <div />}
                                    {guild.name === "The Green Sage Culinary Circle" ? <img src={GreenSageIcon} width="130px" alt="Picture of the Green Sage Culinary Circle Shield. It's topped with a flaming candle to represent life, and the Hermes symbol of health in the middle to represent the guilds goal of healtht, nourishing food." /> : <div />}
                                </Typography>
                                <Typography>
                                    {guild.description}
                                </Typography>
                            </Box>
                        </div>
                    ))}
                </Stack>
            </Box>
        </motion.div>
    )
}
export default LeadershipBoard