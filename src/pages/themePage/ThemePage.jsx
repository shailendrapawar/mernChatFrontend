import ThemeCard from "../../components/themeCard/ThemeCard"
import "./themePage.css"
const ThemePage = () => {

  const themeArr = [
    {
      dark: "#28262B",
      primary: "#333333",
      light: "#A9A29C",
      pastel: "#D5CCC7"
    }, {
      dark: "#1D3557",
      primary: "#457B9D",
      light: "#A8DADC",
      pastel: "#F1FAEE"
    }, {
      dark: "#230C33",
      primary: "#592E83",
      light: "#9984D4",
      pastel: "#CAA8F5"
    }, {
      dark: "#1D3557",
      primary: "#457B9D",
      light: "#A8DADC",
      pastel: "#F1FAEE"
    }
  ]
  return (
    <div className="bg-white w-[90%] max-w-[500px] h-50 relative flex flex-col items-center justify-evenly">

      <section className=" scroll-class w-full bg-green-200 h-3/4 flex justify-evenly items-center flex-wrap overflow-y-scroll gap-2">
        {
          (themeArr!=[])?(themeArr.map((item,i)=>{
            return <ThemeCard key={i}/>
          })):(<> no theme available</>)
        }
      </section>

      <button className=" h-10 w-25 rounded-md bg-blue-400 text-white">Set Theme</button>
    </div>
  )
}
export default ThemePage