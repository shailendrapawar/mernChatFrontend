import { useSelector } from "react-redux"

const SingleMsg = ({ data, owner }) => {
  const { theme } = useSelector(state => state.theme)
  const isOwner = owner?.id == data?.senderId

  const to12HourFormat = (isoString) => {
    return new Date(isoString).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  }

  return (
    <div className="relative max-w-[50%] break-word pb-4 pl-1.5 pt-1 pr-1 h-auto  min-w-16 rounded-md " style={isOwner ? { alignSelf: "end", backgroundColor: theme.primary, color: "white" } : { alignSelf: "start", backgroundColor: "#D9D9D9",color:"black" ,border:"1px solid #D9D9D9" }}>
      <span className="text-xs">{data.message}</span>
      <i className="absolute bottom-1 right-1.5 text-[7px]">{to12HourFormat(data.createdAt)}</i>
    </div>
  )
}
export default SingleMsg