import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherAPI } from "../Services/weatherAPI";

export const store = configureStore({
    reducer: {
        [weatherAPI.reducerPath]: weatherAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherAPI.middleware),
})

setupListeners(store.dispatch);