import { useSelector } from "react-redux"

const SingleMsg = ({data,authUser}) =>{
  
const user=useSelector(state=>state.user)
  // console.log(data)

  const isOwner=user?.authUser?._id===data.senderId
  console.log(isOwner)

  return (
    <div className="relative max-w-[50%] break-word p-1 min-h-12 rounded-md" style={isOwner?{alignSelf:"end"}:{ alignSelf:"start"}}>
      <span className="text-sm">{data.message}</span>
      <i className="absolute bottom-0 right-1 text-xs">time</i>
    </div>
  )
}
export default SingleMsg