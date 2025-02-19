import "./home.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { IoColorFilterOutline } from "react-icons/io5";
import OtherUserList from "../../components/otheUserList/OtherUserList"
const Home = () => {
  const navigate = useNavigate()
  const tempArr = [1, 2, 3, 4, 5, 6]
  const user = useSelector(state => state.user)
  const { theme } = useSelector(state => state.theme)
  console.log(theme)

  useEffect(() => {
    if (!user) {
      navigate("/")
    }

  }, [])


  console.log(user)
  return (
    <main className="w-[90%] max-w-[800px] h-[500px] flex">

      <section className="w-2/6 relative" style={{ backgroundColor: theme.pastel }}>
        <div className="w-100% h-[20%] flex text-white" style={{ backgroundColor: theme.primary }}>

          <div className=" h-full w-[60%] flex flex-col justify-evenly items-center ">
            <img className="h-17 w-17 bg-gray-300 rounded-full"></img>
            <span>username</span>
          </div>

          <section className="w-[40%] flex items-center justify-center">
            <b>THEME</b>
          </section>
        </div>


        <div className="h-[70%] flex flex-col justify-evenly" style={{ backgroundColor: theme.pastel }}>
          <section className="h-10 flex justify-evenly items-center">
            <input type="text" className="w-[75%] rounded-2xl h-7 text-xs pl-2 pr-2 bg-white outline-none " />
            <button className="w-[20%] rounded-md text-xs h-7 text-white " style={{ backgroundColor: theme.dark }}>search</button>
          </section>

          <section className="user-list h-[80%] overflow-y-scroll flex flex-col gap-2  p-2">
            {tempArr.map((v, i) => {
              return <OtherUserList key={i} />
            })}
          </section>
        </div>
        <button className="absolute bottom-3 left-3 w-20 h-8 rounded-md bg-red-500 text-white">logout</button>
      </section>






      <section className="w-4/6">
        <header className="h-[15%] text-white flex relative items-center gap-5 pl-5" style={{backgroundColor:theme.dark}}>
          <img className="h-15 w-15 bg-slate-300 rounded-full"></img>
          <span>selected user name</span>
          <span className="absolute right-5">online</span>
        </header>

        <main className="h-[75%] bg-white" >
          chats
        </main>

        <footer className="h-[10%] bg-white flex  gap-2  pl-2 pr-2 items-center">
          <input type="text" className=" text-sm h-8 w-[80%] rounded-md pl-2" placeholder="enter messsage" style={{ backgroundColor: theme.pastel }}></input>
          <button className="w-[20%] h-8 rounded-md text-white " style={{ backgroundColor: theme.dark }}>send</button>
        </footer>

      </section>














    </main>
  )
}
export default Home