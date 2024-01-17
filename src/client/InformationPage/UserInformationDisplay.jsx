import { useGetUserQuery } from "../../redux/api";
import CookingConquestInfoPage from "./CookingConquestInfoPage";
import GuildInfoPage from "./GuildInfoPage";

const UserInformationDisplay = () => {
    const { data, error, isLoading } = useGetUserQuery();

    if (isLoading) {
        console.log(isLoading)
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
            {data && data.level !== 4 || !data
                ?
                <div>
                <CookingConquestInfoPage />
                </div>
                :
                <div>
                    <GuildInfoPage />
                </div>}

        </div>
    )
}
export default UserInformationDisplay