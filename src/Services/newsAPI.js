import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let baseUrl = 'https://newsapi.org/v2/'

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (q) => `everything?q=${q}&apiKey=50d435c8313b421484ad446393417e27`,
            providesTags: ['News'],
        }),
    })
})


export const { useGetNewsQuery } = newsAPI;