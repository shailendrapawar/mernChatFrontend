import { useSelector } from "react-redux";
import ThemeCard from "../../components/themeCard/ThemeCard"
import "./themePage.css"
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ThemePage = () => {
  const themeArr = [
    {
      id: 1,
      dark: "#28262B",
      primary: "#333333",
      light: "#A9A29C",
      pastel: "#D5CCC7"
    },
    {
      id: 2,
      dark: "#1D3557",
      primary: "#457B9D",
      light: "#A8DADC",
      pastel: "#F1FAEE"
    },
    {
      id: 3,
      dark: "#7d84b2",
      primary: "#8e9dcc",
      light: "#d9dbf1",
      pastel: "#f9f9ed"
    },
    {
      id: 4,
      dark: "#373f51",
      primary: "#58a4b0",
      light: "#a9bcd0",
      pastel: "#d8dbe2"
    },
    {
      id: 5,
      dark: "#16697a",
      primary: "#489fb5",
      light: "#82c0cc",
      pastel: "#ede7e3"
    },
    {
      id: 6,
      dark: "#000000",
      primary: "#586f7c",
      light: "#b8dbd9",
      pastel: "#f4f4f9"
    },
    {
      id: 7,
      dark: "#5d2a42",
      primary: "#fb6376",
      light: "#fcb1a6",
      pastel: "#ffdccc"
    },
    {
      id: 8,
      dark: "#006d77",
      primary: "#83c5be",
      light: "#ffddd2",
      pastel: "#edf6f9"
    },
    {
      id: 9,
      dark: "#000000",
      primary: "#14213d",
      light: "#fca311",
      pastel: "#e5e5e5"
    },
    {
      id: 10,
      dark: "#687351",
      primary: "#9ba17f",
      light: "#c9c1ae",
      pastel: "#e8e4db"
    },
    // "#e8e4db"
    {
      id: 11,
      dark: "#0d1821",
      primary: "#344966",
      light: "#b4cded",
      pastel: "#f0f4ef"
    },
    {
      id: 12,
      dark: "#084b83",
      primary: "#42bfdd",
      light: "#bbe6e4",
      pastel: "#f0f6f6"
    },
    {
      id: 13,
      dark: "#2b2d42",
      primary: "#ef233c",
      light: "#8d99ae",
      pastel: "#edf2f4"
    },
    {
      id: 14,
      dark: "#006d77",
      primary: "#83c5be",
      light: "#ffddd2",
      pastel: "#edf6f9"
    },
    {
      id: 15,
      dark: "#243e36",
      primary: "#7ca982",
      light: "#e0eec6",
      pastel: "#f1f7ed"
    },
  ];
  

  const{theme}=useSelector(state=>state.theme)
  const navigate=useNavigate()
  
  return (
    <div className="bg-slate-200 w-[90%] max-w-[500px] h-50 relative flex items-end justify-evenly pb-5">
      <IoArrowBackCircle className=" h-8 w-8 absolute left-2 top-2" onClick={()=>navigate("/home")}/>
      <section className=" scroll-class w-full  h-3/4 flex justify-evenly items-center flex-wrap overflow-y-scroll gap-2 p-1">
        {
          (themeArr!=[])?(themeArr.map((item,i)=>{
            return <ThemeCard data={item} key={i} curr={theme.id}/>
          })):(<h1> no theme available</h1>)
        }
      </section>
    </div>
  )
}
export default ThemePage