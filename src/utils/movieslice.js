import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
    name: "movies",
    initialState: {
        currentmovies: null
    },
    reducers: {
        addcurrentmovies: (state, action) => {
            state.currentmovies = action.payload;
        }
    }
})

export const { addcurrentmovies } = movieslice.actions;
export default movieslice.reducer;