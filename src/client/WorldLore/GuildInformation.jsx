import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useGetAllGuildsQuery } from "../../redux/api"
const GuildInformation = () => {
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
                        </Box>
                    </div>
                ))}
            </Stack>
        </div>
    )
}
export default GuildInformation