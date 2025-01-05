import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"Movies",
    initialState:{
        NowPlayingMovies: null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.NowPlayingMovies = action.payload
        },
        addTrailer:(state, action)=>{
            state.trailer = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;