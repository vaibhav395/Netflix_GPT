import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null, //These are the name of movies that we searched for and what gemini gave us
        geminiMovieFromTMDB:null, //This is the movies of above state that we searched on TMDB database
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGeminiMovieResult:(state, action)=>{
            const {geminiMoviesName, tmdbResults} = action.payload;
            state.movieNames = geminiMoviesName;
            state.geminiMovieFromTMDB = tmdbResults;
        }
    }
})

export const {toggleGptSearchView, addGeminiMovieResult}  = gptSlice.actions;
export default gptSlice.reducer;