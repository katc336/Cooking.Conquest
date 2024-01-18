import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { motion } from "framer-motion"

import LoreScroll from "./images/LoreScroll.png"
import SignUpButton from "./SignUpButton"
import MainLoreText from "./MainLoreText"
import GuildInformation from "./GuildInformation"

const WorldLore = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}>
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
        </motion.div>
    )
}
export default WorldLore