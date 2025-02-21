import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {setMessages} from "../store/slices/messageSlice"
import { useNavigate } from "react-router-dom"


const useGetConversation = () => {
    const { selectedUser } = useSelector(state => state.user)
    const user = useSelector(state => state.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        // console.log(selectedUser)
        if (selectedUser==null) {
            return
        }
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
            fetchConversation()
        

    }, [selectedUser?._id, setMessages])


}
export default useGetConversation