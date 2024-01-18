import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import { useGetAllGuildsQuery } from "../../redux/api"

import GreenSageIcon from "./images/GreenSage.png"
import LeafSongIcon from "./images/LeafSong.png"
import GastrognomeIcon from "./images/Gastrognome.png"

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
                            minHeight: "470px",
                            color: "#445D48",
                            borderRadius: "10px",
                            backgroundColor: "transparent",
                            border: 2,
                            borderBottom: 5,
                            borderColor: "rgba(80, 125, 106, 1)",
                        }}>
                            <Typography sx={{ textAlign: "center", }}>
                                {guild.name}
                            </Typography>
                            <Typography sx={{ textAlign: "center" }}>
                                        {guild.name === "Order of the Gastrognomes" ? <img src={GastrognomeIcon} width="100px" alt="Picture of the Order of the Gastrognomes Shield. To the sides are two immersion blenders, showing off the use of newer equipment and experimentation. In the center is a gnome with sun glasses to represent the cooler modern vibe of this guild." /> : <div />}
                                        {guild.name === "Leafsong Epicurean Fellowship" ? <img src={LeafSongIcon} width="100px" alt="Picture of the Leafsong Epicurean Fellowship Shield. It has a leaf in the background, with a bowl of comforting curry tofu underneath. Atop are music notes coming out to represent how comforting food sings to the soul." /> : <div />}
                                        {guild.name === "The Green Sage Culinary Circle" ? <img src={GreenSageIcon} width="80px" alt="Picture of the Green Sage Culinary Circle Shield. It's topped with a flaming candle to represent life, and the Hermes symbol of health in the middle to represent the guilds goal of healtht, nourishing food." /> : <div />}
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