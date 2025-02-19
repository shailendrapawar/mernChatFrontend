import "./home.css"
import { useEffect } from "react"
import {useSelector} from "react-redux"
import {  useNavigate } from "react-router-dom"

import { IoColorFilterOutline } from "react-icons/io5";
import OtherUserList from "../../components/otheUserList/OtherUserList"
const Home = () => {
  const navigate=useNavigate()
  const tempArr=[1,2,3,4,5,6]
  const user=useSelector(state=>state.user)
  useEffect(()=>{
    if(!user.authUser){
      navigate("/")
    }

  },[])


  console.log(user)
  return (
    <main className="w-[90%] max-w-[800px] h-[500px] bg-green-300 flex">
      
      <section className="w-2/6 relative">
        <div className="w-100% h-[20%] flex">

          <div className="bg-white h-full w-[60%] flex flex-col justify-between items-start ">
           <img className="h-18 w-18 bg-gray-300 rounded-full"></img>
           <span>{"username"}</span>
          </div>

          <section className="w-[40%] flex items-center justify-center">
          <b>THEME</b>
          </section>
        </div>


        <div className="h-[70%] flex flex-col justify-evenly">
          <section className="h-10 flex justify-evenly items-center">
            <input type="text" className="w-[75%] rounded-2xl h-7 text-sm pl-1 pr-1"/>
            <button className="w-[20%] rounded-md text-xs h-7 ">search</button>
          </section>

          <section className="user-list h-[80%] overflow-y-scroll flex flex-col gap-2  p-2">
            {tempArr.map((v,i)=>{
              return  <OtherUserList/>
            })}
          </section>
        </div>
        <button className="absolute bottom-3 left-3 w-20 h-8 rounded-md bg-red-500 text-white">logout</button>
      </section>



      <section>
        right side
      </section>
    </main>
  )
}
export default Home