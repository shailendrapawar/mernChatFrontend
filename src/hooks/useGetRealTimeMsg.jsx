import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../store/slices/messageSlice"
import { addNewUser } from "../store/slices/userSlice"
import {toast} from "react-hot-toast"
const useGetRealTimeMsg = () => {

    const {socket}=useSelector(state=>state.socket)
    const message=useSelector(state=>state.message)
    const {otherUsers}=useSelector(s=>s.user)
    // console.log(otherUsers)
    const dispatch=useDispatch();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            // console.log(newMessage)
            dispatch(setMessages([...message.messages,newMessage]))
        })
        return ()=>socket?.off("newMessage")
    },[setMessages,message])


    useEffect(()=>{
        socket?.on("addNewUser",(data)=>{
            // console.log(data)
            dispatch(addNewUser(data))
        })

        return ()=>socket?.off("addNewUser")

    },[socket])
 
}
export default useGetRealTimeMsg