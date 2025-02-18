import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
const Layout = () => {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}
export default Layout