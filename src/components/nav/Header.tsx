
import { MenuIcon, XIcon } from "lucide-react";

import { Link} from "react-router-dom";
import Logo from './../../assets/images/DICT-Banner-Logo.webp'
import DTS from './../../assets/logo/DTS_logo.png'
import NotifIcon from './../../assets/icons/notificationBlue.png'
import OutIcon from './../../assets/icons/out.png'
import { useState } from "react";
import { ComboboxDemo } from "../input/Dropdown";



const Header = ({ navActive, setActive }:any) => {

  const [activePage,setActivePage]=useState("In Process")
  const [navList] = useState<any>(
   [
    {
    name:"Track Document",to:"/dts/receive/track"
    },
    {
    name:"In Process",to:"/dts/receive/dashboard"
    },
    {
      name:"Accomplished",to:"/dts/receive/completed"
    }
  ]
  );
  
    
  return (
    <header className="    flex-col  w-full justify-end z-50 animate__animated animate__slideInDown">

   
    <div className=" animate__animated animate__slideInDow bg-white flex justify-between items-center w-full  py-5 border-b-[0px] border-accent  ">
        <Link className=" ml-10 sm:ml-3" to="/react-vite-supreme" >
          <img src={DTS} className="  h-12  sm:h-10 object-contain " alt="Vite logo" />
        </Link>
        <nav className=" lg:hidden mr-10  text-accent-foreground flex gap-20 uppercase items-center">
          
          <Link className=" flex items-center gap-2 hover:font-semibold  text-xs font-semibold transition-all duration-75 text-blue" to="" >
          <img className=" h-5 object-contain" alt="NotifIcon" src={NotifIcon}/>
          Notifications
          </Link>

          {/* <Link className=" flex items-center  gap-2 hover:font-semibold text-xs font-semibold transition-all duration-75 text-blue" to="" >
           <div className="bg-blue flex items-center justify-center h-5 p-5 w-5 rounded-full">
                <p className=" font-semibold text-base text-white">{JSON.parse(localStorage.getItem("user")||"").position.substring(0, 2)} </p> 
           </div>
          Welcome, {JSON.parse(localStorage.getItem("user")||"").first_name} {JSON.parse(localStorage.getItem("user")||"").last_name}  ▼
          </Link> */}
            <ComboboxDemo/>
          {/* <Link to="/dts/" className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-blue"  >
          
          
          <img className=" h-5 object-contain" alt="OutIcon" src={OutIcon}/>
            Log Out
          </Link> */}
        
        
        </nav>
        <div className=" right-0 top-0 absolute mr-10 sm:mr-4 lg:flex flex-col hidden items-end  justify-end mt-5 pointer-events-none ">

      
            {
            !navActive?
            <MenuIcon onClick={()=>{
              setActive(!navActive)
            }} className=" pointer-events-auto  mt-3  sm:h-5 sm:w-5  h-8 w-8 text-blue hidden lg:flex cursor-pointer"/>
            :
            <XIcon onClick={()=>{
              setActive(!navActive)
            }} className=" pointer-events-auto mt-3  sm:h-5 sm:w-5   h-8 w-8 text-blue hidden lg:flex cursor-pointer"/>
          }
    
          
          
          <nav className={navActive?"  relative  z-50 lg:flex flex-col pointer-events-auto transition-all duration-500 text-accent-foreground ml-0  uppercase items-start self-end mt-12 bg-blue3 py-5 w-[300px]  backdrop-blur-md translate-y-[0px]   rounded-md ":" translate-y-[-20px] opacity-0  pointer-events-none   z-50 lg:flex flex-col  transition-all duration-500 text-accent-foreground  ml-20  uppercase items-start self-end mt-12 bg-blue3 py-5 w-[300px]  backdrop-blur-md   rounded-md "}>



          {/* <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" to="" >
              <div className="bg-blue flex items-center justify-center h-5 p-5 w-5 rounded-full">
                    <p className=" font-semibold text-base text-white">{JSON.parse(localStorage.getItem("user")||"").position.substring(0, 2)}</p> 
              </div>
              Welcome, {JSON.parse(localStorage.getItem("user")||"").first_name} {JSON.parse(localStorage.getItem("user")||"").last_name} ▼
          </Link> */}
          <ComboboxDemo/>
          <Link className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" to="" >
          <img className=" h-5 object-contain" alt="NotifIcon" src={NotifIcon}/>
          Notifications
          </Link>
          <Link to="/dts/" className=" flex items-center gap-2 hover:font-semibold text-xs transition-all duration-75 text-white h-14 w-full pl-10  hover:bg-yellow" >
          <img className=" h-5 object-contain" alt="OutIcon" src={OutIcon}/>
            Log Out
          </Link>
        
        
        </nav>
        </div>
        
        
       
      </div>

      <nav className=" relative bg-blue3 w-full py-2 flex justify-between">
        <Link className=" ml-10 sm:ml-3 sm:hidden" to="/react-vite-supreme" >
          <img src={Logo} className="  h-15  sm:h-10 object-contain " alt="Vite logo" />
        </Link>



        <div className=" text-white   border-0 w-full flex justify-end  sm:items-center  text-sm    items-center sm:mr-0  mr-20 animate__animated  animate__fadeInLeft ">
          
          {navList.map((e:any,key:any)=>(
              <Link to={e.to}  onClick={()=>{
                setActivePage(e.name)
              }} key={key} className={activePage==e.name?" bg-[#2d77ff] px-4 py-2 text-sm text-center cursor-pointer rounded-full   transition-all duration-150":"text-sm text-center cursor-pointer px-4 py-2   transition-all duration-150"}>
              {e.name}
            </Link>

          ))}
         
      </div>
      </nav>
      

      </header>
  )
}

export default Header