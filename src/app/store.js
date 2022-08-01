import { configureStore } from "@reduxjs/toolkit";
import { colorAPI } from "../services/colorAPI";
import { rapidAPI } from "../services/rapidAPI";

const store = configureStore({
    reducer: {
        [rapidAPI.reducerPath]: rapidAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rapidAPI.middleware)
})

export default store;