import { configureStore } from "@reduxjs/toolkit";
import { rapidAPI } from "../services/rapidAPI";

const store = configureStore({
    reducer: {
        [rapidAPI.reducerPath]: rapidAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rapidAPI.middleware)
})

export default store;