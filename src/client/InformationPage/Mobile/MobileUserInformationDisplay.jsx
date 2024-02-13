import { useGetUserQuery } from "../../../redux/api";
import MobileCookingConquestInfoPage from "./MobileCookingConquestInfoPage";
import MobileGuildInfoPage from "./MobileGuildInfoPage";

const MobileUserInformationDisplay = () => {
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
                 <MobileCookingConquestInfoPage />
                </div>
                :
                <div>
                   <MobileGuildInfoPage />
                </div>}

        </div>
    )
}
export default MobileUserInformationDisplay