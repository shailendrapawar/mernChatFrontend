import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

const useGetConversation = () => {
  const {selectedUser}=useSelector(state=>state.user)
  const user = useSelector(state => state.user)

    useEffect(()=>{
        console.log(selectedUser)

        const fetchConversation=async()=>{
            axios.defaults.withCredentials=true
            const res=await axios.get(import.meta.env.VITE_API_URL+`/user/getMessages/${selectedUser?._id}`)
            console.log(res)

        }

        if (!user.authUser) {
            navigate("/")
            return
        }
        fetchConversation()

    },[selectedUser?._id])


}
export default useGetConversation