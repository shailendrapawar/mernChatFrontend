import {createSlice} from "@reduxjs/toolkit"
const slice=createSlice({
    name:"theme",
    initialState:{
        theme:{
            dark:"#28262B",
            primary:"#333333",
            light:"#A9A29C",
            pastel:"#D5CCC7"
        }
    },
    reducers:{
        setTheme:(state,action)=>{
            state.theme=action.payload
        }
    }
})
export const {setTheme}=slice.actions
export default slice.reducer