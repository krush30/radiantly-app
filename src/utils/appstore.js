import { configureStore } from "@reduxjs/toolkit";
import moviesreducer from "./movieslice";
const appstore = configureStore({
    reducer: {
        movies: moviesreducer
    }
})

export default appstore;