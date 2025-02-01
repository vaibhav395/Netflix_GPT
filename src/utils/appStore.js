import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./consfigSlice"
import shimmerReducer from "./shimmerSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config:configReducer,
        shimmer:shimmerReducer
    }
})

export default appStore;