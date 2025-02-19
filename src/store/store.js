import { configureStore } from "@reduxjs/toolkit"
import messageReducer from "../store/slices/messageSlice"
import userReducer from "../store/slices/userSlice"
import themeReducer from "../store/slices/themeSlice"
const rootReducers={
    message:messageReducer,
    user:userReducer,
    theme:themeReducer
}

const myStore=configureStore({
    reducer:rootReducers
})

export default myStore;