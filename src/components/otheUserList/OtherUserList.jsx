import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../../store/slices/userSlice"
import "./otherUserList.css"
const OtherUserList = ({ data, }) => {
  const user = useSelector(state => state.user)
  const { theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const { onlineUsers } = useSelector(state => state.user)
  const isActive = onlineUsers.includes(data._id)
  const handleClick = () => {
    dispatch(setSelectedUser(data))
  }

  const isSelected = (user?.selectedUser?._id == data?._id)


  return (
    <div className=" otherUserList-body min-h-auto flex  justify-start items-center gap-2 p-1.5  relative  cursor-pointer select-none" onClick={handleClick}
      style={isSelected ? { backgroundColor: theme.dark, color: "white" } : { backgroundColor: theme.light, }}
    >
      <img className={`h-14 w-14 rounded-full p-1 ${isActive ? "bg-green-500" : "bg-slate-400"}`} src={data.profileImg} alt="usrImg" ></img>
      <span className="text-sm" style={isSelected?{}:{color:theme.dark}}>{data.username}</span>
    </div>
  )
}
export default OtherUserList
