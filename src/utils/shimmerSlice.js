import { createSlice } from "@reduxjs/toolkit";

const shimmerSlice = createSlice({
    name:"shimmer",
    initialState:{
        showShimmer: false
    },
    reducers:{
        toggleShimmer:(state)=>{
            state.showShimmer = true;
        }
    }
})

export const {toggleShimmer} = shimmerSlice.actions;
export default shimmerSlice.reducer;