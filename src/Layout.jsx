import { Outlet, useNavigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import io from "socket.io-client"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setSocket} from "./store/slices/socketSlice"
import { setOnlineUsers } from "./store/slices/userSlice"
const Layout = () => {

  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()

  const navigate=useNavigate()
  useEffect(()=>{

    if(!user.authUser){
      navigate("/")
      return
    }
    

    const baseUrl=import.meta.env.VITE_API_URL
    const socket=io(`${baseUrl}/`,{
      query:{
        userId:user?.authUser?.id
      }
    })
    dispatch(setSocket(socket))

    socket.on("getOnlineUsers",(onlineUsers)=>{
      dispatch(setOnlineUsers(onlineUsers))
    })

    return ()=>{
      socket.close()
      dispatch(setSocket(null))
    }
    
  },[user.authUser])


  return (
    < div className=" h-screen w-screen flex justify-center items-center">
      <Outlet  />
      <Toaster />
    </div>
  )
}
export default Layout