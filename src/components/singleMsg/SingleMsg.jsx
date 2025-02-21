import { useSelector } from "react-redux"

const SingleMsg = ({data,owner}) =>{

  const {theme}=useSelector(state=>state.theme)

  const isOwner=owner?.id==data?.senderId

  return (
    <div className="relative max-w-[50%] break-word p-2 min-h-12 rounded-md" style={isOwner?{alignSelf:"end",backgroundColor:theme.primary,color:"white"}:{ alignSelf:"start",backgroundColor:"#D9D9D9"}}>
      <span className="text-sm">{data.message}</span>
      <i className="absolute bottom-0 right-1 text-[9px]">time</i>
    </div>
  )
}
export default SingleMsg