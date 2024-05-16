import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState: {
        isMenuOpen: true,
    },
    reducers:{
    toogleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen
    },
    hideMenu: (state) => {
        state.isMenuOpen = false
    }
}
})

export const {toogleMenu, hideMenu} = appSlice.actions
export default appSlice.reducer