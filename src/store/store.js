import { configureStore } from "@reduxjs/toolkit"
import messageReducer from "../store/slices/messageSlice"
import userReducer from "../store/slices/userSlice"
import themeReducer from "../store/slices/themeSlice"
import socketReducer from "../store/slices/socketSlice"
const rootReducers={
    message:messageReducer,
    user:userReducer,
    theme:themeReducer,
    socket:socketReducer
}
const myStore=configureStore({
    reducer:rootReducers,
    middleware:(getDefaultMiddleware)=>

        getDefaultMiddleware({
           serializableCheck:false
        })  
})

export default myStore;