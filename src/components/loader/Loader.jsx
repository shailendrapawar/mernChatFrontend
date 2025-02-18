import "./loader.css"
const Loader = ({value}) => {
  return (
    <div className="container w-30 h-8 flex justify-evenly p-1 items-center" style={value?{}:{display:"none"}}>
      <span className="item"></span>
      <span className="item"></span>
      <span className="item"></span>
      <span className="item"></span>
    </div>
  )
}
export default Loader