import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = "/";

const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,

        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ["Users", "Recipes", "RecipeBook", "Guilds", "UserRecipe"],

    endpoints: (builder) => ({
        //<-----------AUTHORIZATION----------->
        //REGISTER ACCOUNT ENDPOINT
        register: builder.mutation({
            query: (user) => ({
                url: `/auth/register`,
                method: 'POST',
                body: user,
            }),
            providesTags: ["Users"]
        }),
        //LOGIN ACCOUNT 
        login: builder.mutation({
            query: (user) => ({
                url: `/auth/login`,
                method: 'POST',
                body: user,
            }),
            providesTags: ["Users"]
        }),
        //<------------GET USER INFO------------>
        //GET USER
        getUser: builder.query({
            query: () => ({
                url: `/auth/account`,
                method: 'GET',
            }),
            providesTags: ["Users"]
        }),
        //GET User's recipe book item
        getRecipeBookItem: builder.query({
            query: () => ({
                url: `/api/myRecipeBook`,
                method: 'GET'
            }),
            providesTags: ["RecipeBook"]
        }),
        //PATCH User's recipe book item to complete
        patchCompletedRecipe: builder.mutation({
            query: ({ id, completed }) => ({
                url: `api/myRecipeBook_complete/${id}`,
                method: 'PATCH',
                body: { completed },
            }),
            invalidatesTags: ["RecipeBook", "Users"]
        }),
         //DELETE RECIPE FROM USER
         deleteRecipeFromUser: builder.mutation({
            query: (id) => ({
                url: `/api/myRecipeBook_delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["RecipeBook"]
        }),
        //GET USER'S GUILD
        getUsersGuild: builder.query({
            query: () => ({
                url: `/api/myGuild`,
                method: 'GET'
            }),
        }),
        //<------------RECIPES------------>
        //GET ALL RECIPES
        getAllRecipes: builder.query({
            query: () => ({
                url: `/api/recipes`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
        //GET SINGLE RECIPE
        getSingleRecipe: builder.query({
            query: (id) => ({
                url: `/api/recipe/${id}`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
        //GET LEVEL ONE RECIPES
        getLevelOneRecipes: builder.query({
            query: () => ({
                url: `/api/recipes-level-one`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
        //GET LEVEL TWO RECIPES
        getLevelTwoRecipes: builder.query({
            query: () => ({
                url: `/api/recipes-level-two`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
        //GET LEVEL THREE RECIPES
        getLevelThreeRecipes: builder.query({
            query: () => ({
                url: `/api/recipes-level-three`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
        //ADD RECIPE TO USER
        postRecipeToUser: builder.mutation({
            query: (recipeId) => ({
                url: `/api/myRecipeBook`,
                method: 'POST',
                body: recipeId,
            }),
            invalidatesTags: ["RecipeBook"]
        }),
        //<------------USER'S RECIPES------------>
         //GET ALL USER'S RECIPES
         getMyUsersRecipe: builder.query({
            query: () => ({
                url: `/api/myGuildRecipes`,
                method: 'GET',
            }),
            providesTags: ["UserRecipe"]
        }),
        //POST USER'S RECIPE
        postUserRecipe: builder.mutation({
            query: (recipe) => ({
                url: `/api/guildRecipe`,
                method: 'POST',
                body: recipe,
            }),
            invalidatesTags: ["UserRecipe"]
        }),
        //POST USER'S INGREDIENTS
        postUserRecipeIngredients: builder.mutation({
            query: (ingredients) => ({
                url: `/api/guildRecipe_ingredients`,
                method: 'POST',
                body: ingredients,
            }),
            invalidatesTags: ["UserRecipe"]
        }),
        //POST USER'S INSTRUCTIONS
        postUserRecipeInstructions: builder.mutation({
            query: (instructions) => ({
                url: `/api/guildRecipe_instructions`,
                method: 'POST',
                body: instructions,
            }),
            invalidatesTags: ["UserRecipe"]
        }),
        //GET SINGLE USER'S RECIPE
        getSingleUsersRecipe: builder.query({
            query: (id) => ({
                url: `/api/myGuildRecipe/${id}`,
                method: 'GET',
            }),
            providesTags: ["UserRecipe"]
        }),
          //GET SINGLE USER'S RECIPE INGREDIENTS
          getSingleUsersIngredients: builder.query({
            query: (id) => ({
                url: `/api/myGuildRecipe_ingredient/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ["UserRecipe"]
        }),
          //GET SINGLE USER'S INSTRUCTIONS
          getSingleUserInstructions: builder.query({
            query: (id) => ({
                url: `/api/myGuildRecipe_instructions/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ["UserRecipe"]
        }),
        //DELETE USER'S RECIPE
        deleteUsersRecipe: builder.mutation({
            query: (id) =>({
                url: `/api/guildRecipe/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["UserRecipe"]
        }),
        //UPDATE USER'S RECIPE
        updateUsersRecipe: builder.mutation({
            query: (id) =>({
                url: `/api/guildRecipe/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ["UsersRecipe"]
        }),
        postRating: builder.mutation({
            query: ({ id, rating, writtenReview }) => ({
                url: `/api/recipeRating/${id}`,
                method: 'POST',
                body: { id, rating, writtenReview }
            }),
            invalidatesTags: ["Guilds"]
        }),
        //<------------GUILDS------------>
        //GET ALL GUILDS
        getAllGuilds: builder.query({
            query: () => ({
                url: `/api/guilds`,
                method: 'GET',
            }),
            providesTags: ["Guilds"]
        }),
        //PATCH User's account to join a guild
        patchJoinGuild: builder.mutation({
            query: ({ id, guildId }) => ({
                url: `api/myGuild/${id}`,
                method: 'PATCH',
                body: { guildId },
            }),
            invalidatesTags: ["RecipeBook", "Users"]
        }),
        //GET ALL GUILD POSTED RECIPES
        getAllGuildRecipes: builder.query({
            query: () => ({
                url: `api/guildRecipe`,
                method: 'GET'
            })
        }),
        //GET SINGLE GUILD POSTED RECIPES
        getSingleGuildRecipes: builder.query({
            query: (id) => ({
                url: `api/guildRecipe/${id}`,
                method: 'GET'
            })
        }),
    }),
})
export default api;

export const {
    //AUTHORIZATION
    useRegisterMutation,
    useLoginMutation,
    //USER'S INFO
    useGetUserQuery,
    useGetRecipeBookItemQuery,
    usePatchCompletedRecipeMutation,
    useDeleteRecipeFromUserMutation,
    useGetUsersGuildQuery,
    //RECIPE INFO
    useGetAllRecipesQuery,
    useGetSingleRecipeQuery,
    useGetLevelOneRecipesQuery,
    useGetLevelTwoRecipesQuery,
    useGetLevelThreeRecipesQuery,
    usePostRecipeToUserMutation,
    //USER'S RECIPE INFO
    useGetMyUsersRecipeQuery,
    usePostUserRecipeMutation,
    usePostUserRecipeIngredientsMutation,
    usePostUserRecipeInstructionsMutation,
    useGetSingleUsersRecipeQuery,
    useGetSingleUsersIngredientsQuery,
    useGetSingleUserInstructionsQuery,
    useDeleteUsersRecipeMutation,
    useUpdateUsersRecipeMutation,
    usePostRatingMutation,
    //GUILD INFO
    useGetAllGuildsQuery,
    usePatchJoinGuildMutation,
    useGetAllGuildRecipesQuery,
    useGetSingleGuildRecipesQuery,
} = api