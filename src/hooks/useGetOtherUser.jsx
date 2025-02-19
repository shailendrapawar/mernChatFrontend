import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { setOtherUsers } from "../store/slices/userSlice"

const useGetOtherUser = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOtherUsers = async () => {

            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(import.meta.env.VITE_API_URL + `/auth/getOtherUsers`)
                console.log(res)
                if (res) {
                    dispatch(setOtherUsers(res.data.data))
                }
            } catch (err) {
                console.log(err)
            }

        }


        if (!user.authUser) {
            navigate("/")
            return
        }
        fetchOtherUsers()

    }, [])
}
export default useGetOtherUser