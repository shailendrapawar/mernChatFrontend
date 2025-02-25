import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaTransgender } from "react-icons/fa6";

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { toast } from "react-hot-toast"
import axios from "axios"

const Register = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "male"
  })

  const handleChange = (e) => {
    // console.log(e)
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleClick = async (e) => {


    if (formData.email == "" || formData.username == "" || formData.password == "") {
      console.log("enter all feilds")
      toast.error("enter all fields")
      e.preventDefault()
      return
    }
    try {

      axios.defaults.withCredentials = true
      let res = await axios.post(import.meta.env.VITE_API_URL + "/auth/register", formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if (res) {
        toast.success(res.data.msg)

        setTimeout(() => {
          navigate("/")
        }, 1000);
      }

    } catch (err) {
      console.error(err.message)
      toast.error(err.response.data.msg)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div onSubmit={handleClick} className="h-[400px] w-[320px] bg-slate-200 pl-2 pr-2 flex flex-col gap-5 justify-evenly ">

      <h1 className="text-center text-3xl">Register page</h1>
      <div className=" h-[60%] flex flex-col gap-2 items-center relative">
        <section className=" h-10 flex w-full  bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><FaUser className="h-5 w-5 text-white "></FaUser></div>
          <input name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
            required
            className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter username"></input>
        </section>

        <section className=" h-10 flex  w-full  bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><MdEmail className="h-5 w-5 text-white "></MdEmail></div>
          <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
            placeholder="enter email"></input>
        </section>

        <section className=" h-10 flex  w-full   bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><RiLockPasswordFill className="h-5 w-5 text-white "></RiLockPasswordFill></div>
          <input className=" w-[85%] pl-2 pr-1 outline-none text-sm"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
            required
            placeholder="enter password"></input>
        </section>

        <select className="w-50 bg-blue-500 text-white text-sm h-6 text-center rounded-2xl outline-none"
          name="gender"
          value={formData.gender}
          onChange={(e) => handleChange(e)}
        >
          <option value={"male"}>male</option>
          <option value={"female"}>female</option>
        </select>

        <section className="h-8 flex items-center justify-between  w-[90%] absolute bottom-1">
          <Link to={"/"} className="text-blue-600 text-sm">already user? Login</Link>
          <button className=" h-full w-20 bg-blue-500 text-white rounded-md" onClick={(e) => handleClick(e)}>Register</button>
        </section>
      </div>

    </div>
  )
}
export default Register