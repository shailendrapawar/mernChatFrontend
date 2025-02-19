import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {setMessages} from "../store/slices/messageSlice"
const useGetConversation = () => {
    const { selectedUser } = useSelector(state => state.user)
    const user = useSelector(state => state.user)
    const dispatch=useDispatch()
    
    useEffect(() => {
        console.log(selectedUser)
        const fetchConversation = async () => {
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get(import.meta.env.VITE_API_URL + `/user/getMessages/${selectedUser?._id}`)
                // console.log(res)
                dispatch(setMessages(res.data.data))
            

            } catch (err) {
                console.log(err)
            }
        }
        if (!user.authUser) {
            navigate("/")
            return
        }
        fetchConversation()

    }, [selectedUser?._id, setMessages])


}
export default useGetConversation