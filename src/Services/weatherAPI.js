import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let baseUrl = 'http://api.weatherapi.com/v1/'

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Weather'],
    endpoints: (builder) => ({
        getCurrentWeather: builder.query({
            query: (q) => `current.json?key=02964ba51e5b498aa58122223232802&q=${q}&aqi=no`,
            providesTags: ['Weather'],
        }),
    })
})


export const { useGetCurrentWeatherQuery } = weatherAPI;