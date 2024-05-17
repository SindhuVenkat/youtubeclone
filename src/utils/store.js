import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import idSlice from "./idSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
reducer:{
    app: appSlice,
    id: idSlice,
    search: searchSlice
}
})


export default store;