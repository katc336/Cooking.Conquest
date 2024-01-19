import Box from "@mui/material/Box";
import Rating from '@mui/material/Rating';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useGetSingleGuildRecipesQuery } from "../../../../redux/api";
import Map5Stars from "./Map5Stars";
import Map4Stars from "./Map4Stars";
import Map3Stars from "./Map3Stars";
import Map2Stars from "./Map2Stars";
import Map1Stars from "./Map1Star";

const MapAllRatings = ({ id }) => {
    return (
        <div>
            <Map5Stars
                id={id} />
            <Map4Stars
                id={id} />
            <Map3Stars
                id={id} />
            <Map2Stars
                id={id} />
            <Map1Stars
                id={id} />
        </div>
    )
}
export default MapAllRatings