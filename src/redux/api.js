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
    tagTypes: ["Users"],

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
                url: `/api//recipe/${id}`,
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
                url: `/api"/recipes-level-three"`,
                method: 'GET',
            }),
            providesTags: ["Recipes"]
        }),
       
    }),
})
export default api;

export const {
    //AUTHORIZATION
    useRegisterMutation,
    useLoginMutation,
    //GET USER'S INFO
    useGetUserQuery,
    //GET RECIPE INFO
    useGetAllRecipesQuery,
    useGetSingleRecipeQuery,
    useGetLevelOneRecipesQuery,
    useGetLevelTwoRecipesQuery,
    useGetLevelThreeRecipesQuery
} = api