import  { createSlice }from "@reduxjs/toolkit"

const slice=createSlice({
    name:"message",
    initialState:{
        messsages:null
    },
    reducers:{
        setMessages:(state,action)=>{
            state.messsages=action.payload
        }
    }
})


export const {setMessages}=slice.actions
export default slice.reducer