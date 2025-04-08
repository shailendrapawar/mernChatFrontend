import { configureStore } from "@reduxjs/toolkit"
import messageReducer from "../store/slices/messageSlice"
import userReducer from "../store/slices/userSlice"
import themeReducer from "../store/slices/themeSlice"
import socketReducer from "../store/slices/socketSlice"

import {persistStore,persistReducer} from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit"
import sessionStorage from "redux-persist/es/storage/session"

const persistConfig={
    key:"root",
    storage:sessionStorage,
    blacklist: ["socket"],
}
const rootReducers=combineReducers({
    message:messageReducer,
    user:userReducer,
    theme:themeReducer,
    socket:socketReducer
})

const persistedReducer=persistReducer(persistConfig,rootReducers);

export const myStore=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>

        getDefaultMiddleware({
           serializableCheck:false
        })  
})

export const  persistor=persistStore(myStore);