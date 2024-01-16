import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import { useParams, useNavigate } from "react-router-dom"

import { useGetAllGuildsQuery, usePatchJoinGuildMutation } from "../../redux/api"

import GuildSelectBackground from "./images/GuildSelectBackground.png"

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
            <Box sx={{ mt: "10%", mx: "10%" }}>
                <img
                    src={GuildSelectBackground}
                    style={{ position: "absolute", zIndex: -1 }}
                    width="1200px"
                />
                <Box sx={{ px: 10}}>
                    <Stack direction="row">
                        {data && data.map((guild) => (
                            <div key={guild.id}>
                                <Box sx={{
                                    p: 2,
                                    mx: 1,
                                    mt: 20,
                                    maxWidth: "300px",
                                    minHeight: "300px",
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