import { Box } from "@mui/material";

import { motion } from "framer-motion";

import { useMediaQuery, useTheme } from "@mui/material";

import { useGetUserQuery } from "../../../../redux/api";
import MaxLevelCard from "./MaxLevelCard.png"
import JoinGuildButton from "./JoinGuildButton";
import UsersGuild from "./UsersGuild";


const MaxLevelUserDisplay = () => {
    const { data, error, isLoading } = useGetUserQuery();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    if (isLoading) {
        console.log("Loading...")
        //TO DO
        return null
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        return <>{error}</>
    }
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}>
            <div>
                <Box sx={{ mx: 1, mt: 10, pb: 50 }}
                    style={{
                        backgroundImage: `url(${MaxLevelCard})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <JoinGuildButton />
                    <UsersGuild />
                </Box>
            </div>
        </motion.div>
    )
}
export default MaxLevelUserDisplay