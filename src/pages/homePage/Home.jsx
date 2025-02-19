import { useEffect } from "react"
import {useSelector} from "react-redux"
import {  useNavigate } from "react-router-dom"

import { IoColorFilterOutline } from "react-icons/io5";

const Home = () => {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  useEffect(()=>{
    if(!user.authUser){
      navigate("/")
    }

  },[])


  console.log(user)
  return (
    <main className="w-[90%] max-w-[800px] h-[500px] bg-green-300 flex">
      
      <section className="w-2/6">
        <div className="w-100% h-[20%] flex">

          <div className="bg-white h-full w-[60%] flex flex-col justify-between items-start ">
           <img className="h-18 w-18 bg-gray-300 rounded-full"></img>
           <span>{"username"}</span>
          </div>

          <section className="w-[40%] flex items-center">
          <b>THEME</b>
          </section>

        </div>

        <div className="h-[70%]">
          online and othe user
        </div>

        

      </section>



      <section>
        right side
      </section>
    </main>
  )
}
export default Home