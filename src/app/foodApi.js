import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),
  endpoints: (builder) => ({

    getSearch: builder.query({
      query: (name) => ({
        url: '/search.php',
        params:{
          s : name
        }
      }),
    }),

    getCategories: builder.query({
      query: () => ({
        url: '/categories.php',
      }),
    }),
       
    getSpecial: builder.query({
      query: () => ({
        url: '/random.php',
      }),
    }),
       
    getDetail: builder.query({
      query: (id) => ({
        url: '/search.php',
        params:{
          f: id
        }
      }),
    }),
       



  }),
})


export const {useGetSearchQuery,useGetCategoriesQuery,useGetSpecialQuery,useGetDetailQuery } = foodApi;