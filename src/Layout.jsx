import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
const Layout = () => {
  return (
    < div className=" h-screen w-screen flex justify-center items-center">
      <Outlet  />
      <Toaster />
    </div>
  )
}
export default Layout