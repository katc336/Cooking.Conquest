import Typography from "@mui/material/Typography"

import { useGetUsersGuildQuery } from "../../../../redux/api"

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
            <Typography variant="h5"
                sx={{ textAlign: "center", px: "10%", pt: "80%" }}>
                {data && data.name}
                {data && data.name === "Order of the Gastrognomes" ? <div>GNOMES</div> : <div> </div>}
                {data && data.name === "Leafsong Epicurean Fellowship" ? <div>LEAFSONG</div> : <div> </div>}
                {data && data.name === "The Green Sage Culinary Circle" ? <div>GREENSAGE</div> : <div> </div>}
            </Typography>
        </div>
    )
}

export default UsersGuild