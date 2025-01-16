import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"Movies",
    initialState:{
        NowPlayingMovies: null,
        trailer:null,
        popular:null,
        toprated:null,
        upcoming:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.NowPlayingMovies = action.payload
        },
        addTrailer:(state, action)=>{
            state.trailer = action.payload
        },
        addPopular:(state, action)=>{
            state.popular = action.payload
        },
        addTopRated:(state, action)=>{
            state.toprated = action.payload
        },
        addUpcoming:(state, action)=>{
            state.upcoming = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailer, addPopular, addTopRated, addUpcoming} = movieSlice.actions;
export default movieSlice.reducer;