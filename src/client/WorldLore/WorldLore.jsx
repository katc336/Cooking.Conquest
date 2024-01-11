import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import LoreScroll from "./LoreScroll.png"
import SignUpButton from "./SignUpButton"
import MainLoreText from "./MainLoreText"
import GuildInformation from "./GuildInformation"

const WorldLore = () => {
    return (
        <div>
            <Box
                sx={{ mx: "5%", mt: "5%", pt: "15%", px: "17%" }}
                style={{
                    backgroundImage: `url(${LoreScroll})`,
                    backgroundSize: "cover",
                    width: "60%",
                    backgroundRepeat: "no-repeat",
                }}>
                <MainLoreText />
                <SignUpButton />
                <GuildInformation/>
            </Box>
        </div>
    )
}
export default WorldLore