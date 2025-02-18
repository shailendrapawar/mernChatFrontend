import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from "react-router-dom"


const Login = () => {
    return (
        <div className="h-[400px] w-[320px] bg-slate-200 pl-2 pr-2 flex flex-col gap-5 justify-evenly ">

            <h1 className="text-center text-3xl">LOGIN Page</h1>

            <div className=" h-[40%] flex flex-col gap-2 items-center relative">
                <section className=" h-10 flex rounded-md overflow-hidden  bg-white w-full">
                    <div className="w-[15%] flex justify-center items-center bg-blue-500"><FaUser className="h-5 w-5 text-white "></FaUser></div>
                    <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter user or email"></input>
                </section>

                <section className=" h-10 flex rounded-md overflow-hidden bg-white w-full">
                    <div className="w-[15%] flex justify-center items-center bg-blue-500">< RiLockPasswordFill className="h-5 w-5 text-white "></RiLockPasswordFill></div>
                    <input className=" w-[85%] pl-2 pr-1 outline-none text-sm" placeholder="enter user or email"></input>
                </section>

                <section className="h-8 flex items-center justify-between w-[90%] absolute bottom-2">
                    <Link to={"/register"} className="text-blue-600 text-sm">New user? Register</Link>
                    <button className=" h-full w-20 bg-blue-500 text-white rounded-md">Log-in</button>
                </section>
            </div>

        </div>
    )
}
export default Login