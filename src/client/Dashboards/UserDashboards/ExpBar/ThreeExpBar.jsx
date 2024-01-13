import Typography from "@mui/material/Typography"
import ThreeExp from "./images/ThreeExp.png"

import { motion } from "framer-motion"

const ThreeExpBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}>
            <Typography sx={{ mt: 5, textAlign: "center" }}>
                <img src={ThreeExp} width="300px" />
            </Typography>
        </motion.div>
    )
}
export default ThreeExpBar