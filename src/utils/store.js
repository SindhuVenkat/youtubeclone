import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import idSlice from "./idSlice";

const store = configureStore({
reducer:{
    app: appSlice,
    id: idSlice
}
})


export default store;