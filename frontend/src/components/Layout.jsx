import Navbar from "./shared/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Navbar ONLY ONCE */}
  

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout