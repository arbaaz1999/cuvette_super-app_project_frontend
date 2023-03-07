import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsAPI } from "../Services/newsAPI";
import { weatherAPI } from "../Services/weatherAPI";

export const store = configureStore({
    reducer: {
        [weatherAPI.reducerPath]: weatherAPI.reducer,
        [newsAPI.reducerPath]: newsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware, newsAPI.middleware),
})

setupListeners(store.dispatch);