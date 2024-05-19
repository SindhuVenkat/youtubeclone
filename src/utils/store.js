import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import idSlice from "./idSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
reducer:{
    app: appSlice,
    id: idSlice,
    search: searchSlice,
    chat: chatSlice
}
})


export default store;