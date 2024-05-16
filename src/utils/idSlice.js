import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
 name:'youtubeid',
 initialState: null,
 reducers:{
    getYoutubeid: (state, action) => {
        return action.payload;
    }
 }

})

export const {getYoutubeid} = idSlice.actions;
export default idSlice.reducer