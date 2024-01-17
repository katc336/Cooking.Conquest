import { useMediaQuery, useTheme } from "@mui/material";

import { motion } from "framer-motion";

import { useGetUserQuery } from "../../../redux/api";

import MobileUserDashboard from "./MobileUserDashboard";
import WebUserDashboard from "./WebUserDashboard";

const UserDashboard = () => {
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
        return <>{error.message}</>
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}>
            {isMobile
                ?
                <div>
                    <MobileUserDashboard />
                </div>
                ://If not mobile...
                <div>
                    <WebUserDashboard />
                </div>}
        </motion.div>
    )
}
export default UserDashboard