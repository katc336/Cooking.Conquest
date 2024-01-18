import Typography from "@mui/material/Typography"

import { useGetUsersGuildQuery } from "../../../../redux/api"

import GastrognomeShield from "./images/GastrognomeShield.png"
import LeafSongShield from "./images/LeafSongShield.png"
import GreenSageShield from "./images/GreenSageShield.png"

const UsersGuild = () => {
    const { data, error, isLoading } = useGetUsersGuildQuery();

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (!data) {
        console.log("No guild");
        return null
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <div>
            <Typography
                variant="h5"
                sx={{ color: "rgba(223, 233, 228, 1)", textAlign: "center", px: "10%", pt: "100%" }}>
                {data && data.name}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
                {data && data.name === "Order of the Gastrognomes" ? <div><img src={GastrognomeShield} width="250px" alt="Picture of the Order of the Gastrognomes Shield. To the sides are two immersion blenders, showing off the use of newer equipment and experimentation. In the center is a gnome with sun glasses to represent the cooler modern vibe of this guild." /></div> : <div> </div>}
                {data && data.name === "Leafsong Epicurean Fellowship" ? <div><img src={LeafSongShield} width="220px" alt="Picture of the Leafsong Epicurean Fellowship Shield. It has a leaf in the background, with a bowl of comforting curry tofu underneath. Atop are music notes coming out to represent how comforting food sings to the soul." /></div> : <div> </div>}
                {data && data.name === "The Green Sage Culinary Circle" ? <div><img src={GreenSageShield} width="180px" alt="Picture of the Green Sage Culinary Circle Shield. It's topped with a flaming candle to represent life, and the Hermes symbol of health in the middle to represent the guilds goal of healtht, nourishing food." /></div> : <div> </div>}
            </Typography>
        </div>
    )
}

export default UsersGuild