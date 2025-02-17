import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaTransgender } from "react-icons/fa6";


import { Link } from "react-router-dom"


const Register = () => {
  return (
    <div className="h-[400px] w-[320px] bg-slate-200 pl-2 pr-2 flex flex-col gap-5 justify-evenly ">

      <h1 className="text-center text-3xl">Register page</h1>

      <div className=" h-[60%] flex flex-col gap-2 items-center relative">
        <section className=" h-10 flex w-full  bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><FaUser className="h-5 w-5 text-white "></FaUser></div>
          <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter username"></input>
        </section>

        <section className=" h-10 flex  w-full  bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><MdEmail className="h-5 w-5 text-white "></MdEmail></div>
          <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter email"></input>
        </section>

        <section className=" h-10 flex  w-full   bg-white rounded-md overflow-hidden">
          <div className="w-[15%] flex justify-center items-center bg-blue-500"><FaTransgender className="h-5 w-5 text-white "></FaTransgender></div>
          <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter gender"></input>
        </section>

        <select className="w-50 bg-blue-500 text-white text-sm h-6 text-center rounded-2xl outline-none">
        <option value={"male"} className="" >select gender</option>
          <option value={"male"}>male</option>
          <option value={"male"}>female</option>
        </select>

        <section className="h-8 flex items-center justify-between  w-[90%] absolute bottom-1">
          <Link to={"/"} className="text-blue-600 text-sm">already user? Login</Link>
          <button className=" h-full w-20 bg-blue-500 text-white rounded-md">Log-in</button>
        </section>
      </div>

    </div>
  )
}
export default Register