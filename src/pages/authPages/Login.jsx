import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios"
import {toast} from "react-hot-toast"
import Loader from "../../components/loader/Loader";

const Login = () => {

    const[loading,setLoading]=useState(false)
    const [formData,setFormData]=useState({
        identifier:"",
        password:""
    })

    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleLogin=async(e)=>{
        if(formData.identifier==""||formData.password==""){
            e.preventDefault()
            return
        }

        try{
            setLoading(true)
            const res=await axios.post(import.meta.env.VITE_API_URL+"/auth/login",formData,{
                headers:{
                    "Content-Type":"application/json",
                },
                withCredentials:true
            })

            if(res){
                toast.success(res.data.msg)
            }

        }catch(err){
            console.error(err.message)
            toast.error(err.response.data.msg)
        }finally{
            setLoading(false)
        }

    }


    return (
        <div className="h-[400px] w-[320px] bg-slate-200 pl-2 pr-2 flex flex-col gap-5 justify-evenly ">
            <h1 className="text-center text-3xl">LOGIN Page</h1>
            
            <div className=" h-[50%] flex flex-col gap-2 items-center relative">
                <Loader value={loading}/>
                <section className=" h-10 flex rounded-md overflow-hidden  bg-white w-full">
                    <div className="w-[15%] flex justify-center items-center bg-blue-500"><FaUser className="h-5 w-5 text-white "></FaUser></div>
                    <input className="w-[85%] pl-2 pr-1 outline-none text-sm"
                    name="identifier"
                    value={formData.identifier}
                    onChange={(e)=>handleChange(e)}
                    placeholder="enter username  or email"></input>
                </section>

                <section className=" h-10 flex rounded-md overflow-hidden bg-white w-full">
                    <div className="w-[15%] flex justify-center items-center bg-blue-500">< RiLockPasswordFill className="h-5 w-5 text-white "></RiLockPasswordFill></div>
                    <input className=" w-[85%] pl-2 pr-1 outline-none text-sm"
                    name="password"
                    value={formData.password}
                    onChange={(e)=>handleChange(e)}
                    placeholder="enter password"></input>
                </section>

                <section className="h-8 flex items-center justify-between w-[90%] absolute bottom-2">
                    <Link to={"/register"} className="text-blue-600 text-sm">New user? Register</Link>
                    <button className=" h-full w-20 bg-blue-500 text-white rounded-md" onClick={(e)=>handleLogin(e)}>Log-in</button>
                </section>
            </div>

        </div>
    )
}
export default Login