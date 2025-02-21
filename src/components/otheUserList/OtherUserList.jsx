import { useDispatch } from "react-redux"
import { setSelectedUser } from "../../store/slices/userSlice"

const OtherUserList = ({data}) => {
  const dispatch=useDispatch()
  const handleClick=()=>{
    // console.log(data)
    dispatch(setSelectedUser(data))
  }
  return (
    <div className=" min-h-16 flex justify-start items-center gap-2 pl-2 relative bg-white cursor-pointer select-none" onClick={handleClick}>
        <img className="h-13 w-13 rounded-full bg-amber-300" src={data.profileImg}></img>
        <span>{data.username}</span>
        <span className="absolute right-2">o</span>
    </div>
  )
}
export default OtherUserList
