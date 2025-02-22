import "./themeCard.css"
import { setTheme } from "../../store/slices/themeSlice"
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const ThemeCard = ({ data }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleThemeClick = () => {
    dispatch(setTheme(data))
    toast.success("Theme changed")
    navigate("/home")
  }

  return (
    <div className="h-10 w-auto p-1 flex items-center gap-1 border border-slate-400 bg-white  rounded-md"
      onClick={() => handleThemeClick()}
    >
      <div className={`themeCircle`} style={{ backgroundColor: data.pastel }}></div>
      <div className="themeCircle" style={{ backgroundColor: data.light }}></div>
      <div className="themeCircle" style={{ backgroundColor: data.primary }}></div>
      <div className="themeCircle" style={{ backgroundColor: data.dark }}></div>
    </div>
  )
}
export default ThemeCard

