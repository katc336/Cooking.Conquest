import { useGetUserQuery } from "../../../../../redux/api";
import AddIngredientsForm from "./AddIngredientsForm";
import AddRecipeForm from "./AddRecipeForm";
const AddRecipe = () => {
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
            {data && data.level !== 4
                ?//if not level 4, return an empty <div>
                <div/>
                :
                <div>
                    <AddRecipeForm />
                </div>}

        </div>
    )
}
export default AddRecipe