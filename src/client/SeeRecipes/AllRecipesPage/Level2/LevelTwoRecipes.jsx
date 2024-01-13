import { useGetUserQuery } from "../../../../redux/api"
import NoUserRecipeView from "../NoUserRecipeView";
import LevelTwoUserQuests from "./LevelTwoUserQuests"

const LevelTwoRecipes = () => {
    const { data: userData, error: userError, isLoading: userIsLoading } = useGetUserQuery();
    if (userIsLoading) {
        console.log("Loading...")
        return null
    }
    if (userData) {
        console.log(userData)
    }
    if (userError) {
        console.log(userError)
    }
    return (
        <div>
            {!userData
                ?
                <div>
                    <NoUserRecipeView />
                </div>
                :
                <div>
                    <LevelTwoUserQuests />
                </div>}

        </div >
    )
}
export default LevelTwoRecipes