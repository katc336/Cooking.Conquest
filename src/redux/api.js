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
    tagTypes: ["Users", "Recipes", "RecipeBook", "Guilds"],

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
        //<------------GUILDS------------>
        //GET ALL GUILD
        getAllGuilds: builder.query({
            query: () => ({
                url: `/api/guilds`,
                method: 'GET',
            }),
            providesTags: ["Guilds"]
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
    //RECIPE INFO
    useGetAllRecipesQuery,
    useGetSingleRecipeQuery,
    useGetLevelOneRecipesQuery,
    useGetLevelTwoRecipesQuery,
    useGetLevelThreeRecipesQuery,
    usePostRecipeToUserMutation,
    //GUILD INFO
    useGetAllGuildsQuery,
} = api