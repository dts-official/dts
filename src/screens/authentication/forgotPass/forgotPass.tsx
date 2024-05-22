import { ThemeProvider } from "@/components/theme-provider";
import axios from "../../../plugin/axios";
import bg from './../../../../src/assets/images/DICT-bg.webp'
import banner from './../../../../src/assets/images/DICT-Banner-Logo.webp'
import { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AlertBox } from "@/components/alert/Alert";


function ForgotPasswordPage() {

  const navigate = useNavigate();

  const [userF, setUserF ] = useState(
    { email: "",name:""}
  )

  const [warning,setWarning]=useState({
    load:false,
    type:"",
    title:"",
    message:""
  })

  useEffect(()=>{
    console.table(userF)
  },[userF])

  async function ForgotPassword(){
  
    setWarning({
      load:true,
      type:"warning",
      title:"Loading",
      message:"please wait for a while..."
    })

    
      try {
        await axios.post("users/reset_password/",{"email":userF.email}).then((res:any)=>{
          console.log(res.status)
          setWarning({
            load:true,
            type: "success",
            title: "Reset Link Sent Successfully!",
            message: "Great! A reset link has been sent to your email address. Please check your email inbox."
          })
          setTimeout(() => {
            setWarning({
              load:false,
              type:"",
              title:"",
              message:""
            })
          }, 3000);
          setUserF({ email: "",name:""})
        })
        
      } catch (error) {
        setWarning({
          load:true,
          type:"error",
          title: "Reset Link Sending Failed",
          message:"Oops! We couldn't send a reset link to your email address. Please ensure your email address is correct and try again."
        })
        setTimeout(() => {
          setWarning({
            load:false,
            type:"",
            title:"",
            message:""
          })
          
        }, 6000);
        
      
    }
    
  }


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className=" flex w-screen h-screen ">

        {/* background image */}
        <img className= " absolute z-10 w-full h-full object-cover " src={bg} alt="DICT_bg" />

        <div className=" flex z-20 w-full h-full bg-[#163961] bg-opacity-80 justify-center items-center">

          {/* banner logo */}
          <div className=" fixed top-0 left-0 w-full h-[200px] p-10 animate__animated animate__slideInLeft">
            <img className= " " src={banner} alt="DICT_banner" />
          </div>

          {/* forgot password form */}
          <form onSubmit={(e)=>{
            e.preventDefault()




            ForgotPassword();
          }} className=" sm:w-[400px] w-[500px] min-h-[100px] flex flex-col animate__animated animate__slideInDown px-10">
            <p className=" text-textW text-[30px] font-semibold mb-10">Forgot Password</p>

            {/* email inputfield*/}
            <label className=" text-textW mb-1"> Email Address  </label>
            <input className=" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 " value={userF.email} type="email" name="email" onChange={(event)=>{setUserF({ ...userF, email: event.target.value })}} required/>

            {/* reset password button */}
            

            {
              !warning.load?<button
              className=" text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6 rounded-full text-base" type="submit" value="Reset my Password "
          
              
            > Reset Password </button>:
            <button
            className=" pointer-events-none text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6 rounded-full text-base flex items-center justify-center gap-4" type="submit" value="Reset my Password "
           
            
          >Reset Password <span className="material-symbols-outlined animate-spin font-thin">
          autorenew
          </span> </button>
            }


           

            <div className={warning.load?"flex mt-5":"hidden"}>

            <div className="flex w-full justify-center items-center bg-white self-center rounded-md">
              <AlertBox 
              variant={warning.type}
              title={warning.title}
              description={warning.message}
              />
            </div>

          </div>

            <div className=" w-full h-[60px] flex flex-row justify-around items-center ">
              <div className=" w-[25%] border-b border-textW "></div>
              <div className=" w-[25%] border-b border-textW"></div>
            </div>


            {/* Go back button */}
            <div onClick={()=>{navigate('/dts/login')}} className=" cursor-pointer hover:translate-x-[-5px] transition-all duration-200  w-[160px] justify-between items-center flex ">
              <ArrowLeft  className=" text-textW" />
              <p className=" text-textW text-[14px]">Go back to Sign In</p>
            </div>
          

          </form>
        </div>  

      </div>
    </ThemeProvider>
  )
}



export default ForgotPasswordPage
