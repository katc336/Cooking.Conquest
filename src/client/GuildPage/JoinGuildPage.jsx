import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import { useParams, useNavigate } from "react-router-dom"

import { useGetAllGuildsQuery, usePatchJoinGuildMutation } from "../../redux/api"

import GreenSageIcon from "./images/GreenSageIcon.png"
import LeafSongIcon from "./images/LeafSongIcon.png"
import GastrognomeIcon from "./images/GastrognomeIcon.png"

const JoinGuildPage = () => {
    const { data, error, isLoading } = useGetAllGuildsQuery()
    const { id } = useParams();
    const [patchGuild] = usePatchJoinGuildMutation(id);
    const navigate = useNavigate();

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
    const handlePatch = async (guild) => {
        try {
            const result = await patchGuild({ id, guildId: guild });
            console.log("Patch result:", result);
            navigate("/account");
        } catch (error) {
            console.error(error);
        }
    };
    return (
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
                                    mt: 20,
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
                                <Typography sx={{ textAlign: "center" }}>
                                    <Button
                                        onClick={() => handlePatch(guild.id)}
                                        sx={{
                                            p: 1,
                                            my: 1,
                                            color: "white",
                                            borderRadius: "10px",
                                            backgroundColor: "#65B741",
                                            border: 2,
                                            borderBottom: 5,
                                            borderColor: "#445D48",
                                            textTransform: "none"
                                        }}>
                                        Join Guild
                                    </Button>
                                </Typography>
                            </div>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    )
}
export default JoinGuildPage