import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import axios from "../../../plugin/axios"
import { AlertBox } from "@/components/alert/Alert";
import { useParams,Link }  from 'react-router-dom';
import { LoaderIcon } from "lucide-react";

import logo from "../../../assets/images/DICT-Banner-Logo.webp";
import bg from './../../../../src/assets/images/DICT-bg.webp';

const ResetPassword = () => {
  const key = useParams()
    const [warning,setWarning]=useState({
        load:false,
        type:"",
        title:"",
        message:""
      })

      const [userCreate, setUserCreate] = useState({
        ...key,
        new_password: "",
        re_new_password: "",
      });
    
      const [passwordVal,setPasswordVal]=useState(false)
      const [confirmpasswordVal,setConfirmPasswordVal]=useState(false)
        //Password validation family
        const validatePassword = (password: string) => {
          // Password should be at least 5 characters long
          if (password.length < 8) {
            return false;
            
          }
      
          // Password should contain at least one number
          if (!/\d/.test(password)) {
            return false;
          }
      
          return true;
        };
        useEffect(()=>{
          setPasswordVal(validatePassword(userCreate.new_password))
        },[userCreate.new_password])
      
        useEffect(()=>{
          if (userCreate.new_password == userCreate.re_new_password && userCreate.new_password !="" && userCreate.re_new_password!="") {
            setConfirmPasswordVal(true)
          }else{
            setConfirmPasswordVal(false)
          }
        },[userCreate.new_password,userCreate.re_new_password])
       //Password validation family
  
      
       const [show,setShow] = useState(false)
       async function SignUp(){

        if (passwordVal && confirmpasswordVal) {
          setWarning({
            load:true,
            type:"",
            title:"",
            message:""
          })
          try {
            await axios.post("users/reset_password_confirm/", userCreate).then((res:any)=>{
              console.log(res.status)
              setWarning({
                load:true,
                type: "success",
                title: "Congratulations, Password has updated!",
                message: "Hooray! Your account password has been successfully updated."
              })
              setTimeout(() => {
                setWarning({
                  load:false,
                  type:"",
                  title:"",
                  message:""
                })
    
                setUserCreate({
                  ...key,
                  new_password: "",
                  re_new_password: "",
                })

                setShow(true)
              }, 3000);
              
              
    
            })
            
          } catch (error) {
            setWarning({
              load:true,
              type:"error",
              title: "Password Rest Unsuccessful",
              message:"Oops! There might be a problem."
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
        
      }
       

      const onChangeInputCreate = (e: any) => {
        setUserCreate({
          ...userCreate,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
          console.log("Enter key pressed");
        }
      };

     
      
  return (
    <div className=" h-screen  w-screen overflow-hidden flex items-center justify-center bg-blue3 flex-col gap-4 ">
      
      <img className= " absolute z-10 w-full h-full object-cover " src={bg} alt="DICT_bg" />
  
      
      <div className=" flex z-20 w-full h-full bg-[#163961] bg-opacity-80 justify-center items-center">

      {/* banner logo */}
      <div className=" fixed top-0 left-0 w-full h-[200px] p-10 animate__animated animate__slideInLeft">
        <img className= " " src={logo} alt="DICT_banner" />
      </div>


      <form onSubmit={(e:any)=>{
        e.preventDefault();
        }} className="  flex flex-col gap-4 mt-8 w-[80%] max-w-[500px] sm:w-[90%]">

        <h1 className=" text-[30px] font-semibold text-white flex self-start text-accent-foreground mb-6">
        Reset Password
        </h1>    

       <div className=" w-full">
            <label className=" text-textW "> New Password  </label>
            <input
            className=" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 mt-1"
            type="password"
            placeholder="New password"
            value={userCreate.new_password}
            name="new_password"
            onChange={onChangeInputCreate}
            onKeyDown={handleKeyDown}
        />

          <p className={passwordVal?" text-xs ml-2 mt-1 text-green-500":" text-xs ml-2 mt-1 text-red-500"}>{passwordVal?"Valid password":"It must be at least 8 characters and include numbers."}</p>
          </div>
          
          <div className=" w-full">
            <label className=" text-textW mb-2"> Confirm New Password  </label>
            <input
              className=" w-full h-[45px] text-textW bg-transparent border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 mt-1 "
              type="password"
              placeholder="Confirm New Password"
              value={userCreate.re_new_password}
              name="re_new_password"
              onChange={onChangeInputCreate}
              onKeyDown={handleKeyDown}
            />
            <p className={confirmpasswordVal?" text-xs ml-2 mt-1 text-green-500":" text-xs ml-2 mt-1 text-red-500"}>{confirmpasswordVal?"Password match":"Password not match"}</p>
          </div>
       
          <Button
            variant="secondary"
            className={warning.load?"text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6  text-base pointer-events-none rounded-sm gap-5 ":" gap-5 text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] w-full h-[45px] mt-6 rounded-full text-base"}
            onClick={SignUp}
          >
            Update Password
            <LoaderIcon  className={warning.load?" h-4 w-4 animate-spin":"hidden"}/>
          
          </Button>
          <div className={warning.load?"flex":"hidden"}>
            <AlertBox variant={warning.type}
            title={warning.title}
            description={warning.message}
            />
        </div>

       
      </form>
    


    <Button className={show?"flex":"hidden"}>
    <Link id="step1" to="/dts/login">
    Sign In
        </Link>
 
    </Button>
    
    </div>
  </div>
  )
}

export default ResetPassword