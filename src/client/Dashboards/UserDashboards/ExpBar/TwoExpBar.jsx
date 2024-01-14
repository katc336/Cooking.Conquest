import Typography from "@mui/material/Typography"
import TwoExp from "./images/TwoExp.png"

import { motion } from "framer-motion"

const TwoExpBar = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            <Typography sx={{ mt: 5, textAlign: "center" }}>
                <img src={TwoExp} width="300px" />
            </Typography>
        </motion.div>
    )
}
export default TwoExpBar