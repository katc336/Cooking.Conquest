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
        <div>
            <Card sx={{ mt: "10%", mx: "10%", border: 5, borderColor: "#862B0D", backgroundColor: "#FFF9C9", p: 2, borderRadius: "20px" }}>
                <Typography
                    variant="h5"
                    sx={{ m: 3, color: "#362706", textAlign: "center" }}>
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
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Box sx={{ mx: 5 }}>
                <Box sx={{ px: 5}}>
                    <Stack direction="row">
                        {data && data.map((guild) => (
                            <div key={guild.id}>
                                <Box sx={{
                                    p: 2,
                                    mx: 1,
                                    mt: 1,
                                    width: "400px",
                                    minHeight: "480px",
                                    color: "#445D48",
                                    backgroundColor: "rgba(223, 233, 228, 1)",
                                    borderRadius: "10px",
                                    border: 2,
                                    borderBottom: 5,
                                    borderColor: "rgba(80, 125, 106, 1)",
                                }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ textAlign: "center", mb: 2 }}>
                                        {guild.name}
                                    </Typography>
                                    <Typography sx={{ textAlign: "center" }}>
                                        {guild.name === "Order of the Gastrognomes" ? <img src={GastrognomeIcon} width="150px" alt="Picture of the Order of the Gastrognomes Shield. To the sides are two immersion blenders, showing off the use of newer equipment and experimentation. In the center is a gnome with sun glasses to represent the cooler modern vibe of this guild." /> : <div />}
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
            </Box>
        </motion.div>
        </div>
    )
}
export default LeadershipBoard