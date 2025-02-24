import "./home.css"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { IoColorFilterOutline } from "react-icons/io5";
import { MdPersonSearch } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";


import OtherUserList from "../../components/otheUserList/OtherUserList"
import useGetOtherUsers from "../../hooks/useGetOtherUser"
import useGetConversation from "../../hooks/useGetConversation";
import SingleMsg from "../../components/singleMsg/SingleMsg"
import useGetRealTimeMsg from "../../hooks/useGetRealTimeMsg";
import axios from "axios";
import { setMessages } from "../../store/slices/messageSlice";
const Home = () => {

  const navigate = useNavigate()
  const [inputMessage, setInputMessage] = useState("")
  const chatRef = useRef()
  const searchRef = useRef()

  const user = useSelector(state => state.user)
  const { theme } = useSelector(state => state.theme)
  const { messages } = useSelector(state => state.message)
  const dispatch = useDispatch()

  const { onlineUsers } = useSelector(state => state.user)

  const [keyword, setKeyword] = useState("")
  const [otherUserList, setOtherUserList] = useState([])

  const sendMessage = async () => {
    if (inputMessage === "") {
      return
    }
    const receiverId = user?.selectedUser?._id
    axios.defaults.withCredentials = true
    const res = await axios.post(import.meta.env.VITE_API_URL + "/user/sendMessage", {
      message: inputMessage,
      receiverId: receiverId
    }, {
      headers: { "Content-Type": "application/json", }
    })

    if (res) {
      const newMsg = res.data.data
      dispatch(setMessages([...messages, newMsg]))
      setInputMessage("")
    }
  }


  const checkOnline = (userId) => {
    const isOnline = onlineUsers?.includes(userId)
    if (isOnline) {
      return <span className="text-green-400">online</span>
    }
    return <span className=" text-sm " style={{ color: theme.pastel }}>offline</span>
  }


  useEffect(() => {
    if (!user) {
      navigate("/")
    }
    chatRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useGetOtherUsers()
  useGetConversation()
  useGetRealTimeMsg()


  //for searching a user==================
  const handleSearchUser = (e) => {
    const otherUser=user?.otherUsers;
    const res=otherUser.filter((v)=>v.username===keyword)
    setOtherUserList(res)
  }

  //refreshing of other user list if keyword empty=========================
  useEffect(()=>{
    if(keyword===""){
      setOtherUserList(user?.otherUsers)
    }
  },[keyword,user.otherUsers])

  //refreshing the other user list after selection of any user===================
  useEffect(()=>{
      setOtherUserList(user?.otherUsers)
      setKeyword("")
  },[user?.selectedUser])





  return (
    <main className="w-[90%] max-w-[800px] h-[500px] flex">

      <section className="w-2/6 relative" style={{ backgroundColor: theme.pastel }}>
        <div className="w-100% h-[20%] flex text-white" style={{ backgroundColor: theme.primary }}>

          <div className=" authUser-body h-full w-[70%] flex flex-col justify-evenly items-center pt-1">
            <img className=" authUser-body-img h-17 w-17 bg-gray-300 rounded-full" src={user?.authUser?.profile}></img>
            <span>{user?.authUser?.username}</span>
          </div>

          <section className="w-[30%] flex items-center justify-center">
            <IoColorFilterOutline className="h-10 w-10" onClick={() => navigate("/theme")} style={{ color: theme.pastel }} />
          </section>
        </div>


        <div className="h-[70%] flex flex-col justify-evenly" style={{ backgroundColor: theme.pastel }}>
          <section className="h-10 flex justify-evenly items-center pl-1 pr-1">
            <input ref={searchRef} value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className="w-[75%]  h-7 text-xs pl-1 pr-1 bg-white outline-none " style={{border:`1px solid ${theme?.dark}`}} />
            <button onClick={handleSearchUser} className="w-[30%] text-xs h-7 text-white p-1" style={{ backgroundColor: theme.dark }}>
              <MdPersonSearch className="h-full w-full" />
            </button>
          </section>

          <section className="user-list h-[80%] overflow-y-scroll overflow-x-hidden flex flex-col gap-2  p-2">
            {otherUserList!=[]?(otherUserList?.map((item, i) => <OtherUserList key={i} data={item} />)):(<b>loading</b>)}
          </section>
        </div>
        <button className="absolute bottom-3 left-3 w-20 h-8 rounded-md bg-red-500 text-white">logout</button>
      </section>

      {
        (user.selectedUser != null) ? (<section className="w-4/6">
          <header className=" selectedUser-header h-[15%] text-white flex relative items-center gap-5 pl-5" style={{ backgroundColor: theme.dark }}>
            <img className="h-15 w-15 bg-slate-300 rounded-full " src={user?.selectedUser?.profileImg}></img>
            <span>{user?.selectedUser?.username}</span>
            <span className="absolute right-5">{checkOnline(user?.selectedUser?._id)}</span>
          </header>

          <main className=" chat-list h-[75%] bg-white flex flex-col p-2 gap-2 relative overflow-y-scroll" >
            {messages != null ? (
              messages.map((v, i) => {
                return <SingleMsg data={v} key={i} owner={user?.authUser} />
              })

            ) : (<h1>start a convo</h1>)}
            <div className=" w-[90%] " ref={chatRef}></div>
          </main>

          <footer className="h-[10%] bg-white flex  gap-2  pl-2 pr-2 items-center">
            <input type="text" className=" text-sm h-8 w-[80%] rounded-md pl-2 outline-none" value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="enter messsage" style={{ backgroundColor: theme.pastel, border: `1px solid ${theme.dark}` }}></input>
            <button className="w-[20%] h-8 rounded-md text-white p-1" style={{ backgroundColor: theme.dark }}
              onClick={(e) => sendMessage()}
            >
              <BiSolidSend className="h-full w-full"/>
            </button>
          </footer>

        </section>) : (<div className="w-4/6 text-white flex items-center justify-center" style={{ backgroundColor: theme.pastel }}>
          <h1 style={{ color: theme.dark }} >select user to chat</h1>
        </div>)
      }



    </main>
  )
}
export default Home