import { configureStore } from "@reduxjs/toolkit";
import ResponseSlice from "./ResponseSlice";




export default configureStore({
    reducer:{
        response:ResponseSlice
    }
})