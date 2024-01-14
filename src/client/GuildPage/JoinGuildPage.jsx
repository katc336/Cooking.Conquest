import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import { useParams, useNavigate } from "react-router-dom"

import { useGetAllGuildsQuery, usePatchJoinGuildMutation } from "../../redux/api"

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
            <Box sx={{ mt: "10%" }}>
                <Stack direction="row">
                    {data && data.map((guild) => (
                        <div key={guild.id}>
                            <Box sx={{
                                p: 1,
                                m: 1,
                                maxWidth: "300px",
                                minHeight: "330px",
                                color: "#445D48",
                                borderRadius: "10px",
                                backgroundColor: "transparent",
                                border: 2,
                                borderBottom: 5,
                                borderColor: "rgba(80, 125, 106, 1)",
                            }}>
                                <Typography
                                    variant="h6"
                                    sx={{ textAlign: "center", }}>
                                    {guild.name}
                                </Typography>
                                <Typography>
                                    {guild.description}
                                </Typography>
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
                            </Box>
                        </div>
                    ))}
                </Stack>
            </Box>
        </motion.div>
    )
}
export default JoinGuildPage