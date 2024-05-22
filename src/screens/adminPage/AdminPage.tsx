import AdminHeader from "@/components/nav/AdminHeader"
import { Outlet } from "react-router-dom"


function AdminPage() {
  return (
    <div className=" w-full flex  overflow-hidden h-screen bg-[#1e4e93]  box-border ">
        <AdminHeader className=" w-[350px] md:w-[80px] md:min-w-[80px] sm:w-[80px] sm:min-w-[80px]" />
        <div className=" h-screen w-full col-span-6 md:col-span-7 lg:col-span-7 bg-[#1e4e93]">
            <Outlet/>
        </div>


        
    </div>
  )
}

export default AdminPage