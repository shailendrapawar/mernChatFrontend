import  { createSlice }from "@reduxjs/toolkit"

const slice=createSlice({
    name:"message",
    initialState:{
        messages:null
    },
    reducers:{
        setMessages:(state,action)=>{
            state.messages=action.payload
        }
    }
})


export const {setMessages}=slice.actions
export default slice.reducer