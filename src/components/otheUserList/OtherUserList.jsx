import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../../store/slices/userSlice"

const OtherUserList = ({data}) => {
  const dispatch=useDispatch()
  const {onlineUsers}=useSelector(state=>state.user)
  const isActive=onlineUsers.includes(data._id)

  const handleClick=()=>{
    dispatch(setSelectedUser(data))
  }

  return (
    <div className=" min-h-16 flex flex-wrap justify-start items-center gap-2 pl-2 pt-1 relative bg-white cursor-pointer select-none" onClick={handleClick}>
        <img className={`h-14 w-14 rounded-full p-1 ${isActive?"bg-green-500":"bg-slate-400"}`} src={data.profileImg} alt="usrImg" ></img>
        <span>{data.username}</span>
    </div>
  )
}
export default OtherUserList
