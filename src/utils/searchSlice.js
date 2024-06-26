import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{},
    reducers:{
        cacheSearchResults: (state, action) =>{
           return  state = {...state, ...action.payload};
        }
    }
})

export  const {cacheSearchResults} = searchSlice.actions;
export default searchSlice.reducer;