import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMessages } from "../store/slices/messageSlice"
const useGetRealTimeMsg = () => {

    const {socket}=useSelector(state=>state.socket)
    const message=useSelector(state=>state.message)
    // console.log(message)
    const dispatch=useDispatch();
    useEffect(()=>{

        socket.on("newMessage",(newMessage)=>{
            console.log(newMessage)
        })

        return ()=>socket?.off("newMessage")
    },[setMessages,message])
 
}
export default useGetRealTimeMsg