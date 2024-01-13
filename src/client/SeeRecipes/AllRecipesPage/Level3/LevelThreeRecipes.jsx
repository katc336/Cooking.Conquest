import { useGetUserQuery, useGetLevelThreeRecipesQuery } from "../../../../redux/api"

import NoUserRecipeView from "../NoUserRecipeView"
import LevelThreeUserQuests from "./LevelThreeUserQuests"

const LevelThreeRecipes = () => {
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
                    <LevelThreeUserQuests />
                </div>}
        </div >
    )
}
export default LevelThreeRecipes