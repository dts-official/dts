import { useState } from 'react';
import Shield from './../../../assets/icons/shield-security.png'
import axios from './../../../plugin/axios';
import Swal from 'sweetalert2'
import { Loader2Icon } from 'lucide-react';

const Account = () => {
  const [loading,setLoading] = useState(false)
  function Reset(){
    setLoading(true)
    axios.post('users/reset_password/',{
      email:  JSON.parse( localStorage.getItem("user")|| "").email
    }).then((e:any)=>{
      Swal.fire({
        icon: "success",
        title: "We Send an Email to Reset you Password",
        showConfirmButton: false,
        timer: 2500
      });
      setLoading(false)
      
      console.log(e)
    }).catch((e)=>{
      console.log(e)
    })
  }
 

  function getOfficeName(officeId:any, offices:any) {
    const office = offices.find((o:any)=> o.officeID === officeId);
    return office ? office.name : 'Office not found';
}

const officeName = getOfficeName(JSON.parse( localStorage.getItem("user")|| "").office  , JSON.parse( localStorage.getItem("offices")|| "")   );

  return (
    <div className=" relative  rounded-[5px] h-screen w-full pb-36 sm:pb-60 overflow-y-scroll flex items-center md:items-start justify-center gap-5    ">
    
      <div className=' relative w-full px-[100px] md:px-10 md:flex-col flex gap-4'>

      
       <div className=" w-[40%] md:w-full gap-10">

       <div className=" flex flex-col gap-4 md:mt-10 ">
       <p className=" font-semibold text-sm">Account Settings</p>
       <div className=" flex relative items-center">
        <div className="  z-10 flex items-center justify-center p-5 text-accent font-bold h-[100px] w-[100px] aspect-square object-contain bg-[#163961] rounded-full uppercase text-3xl">
        {JSON.parse(localStorage.getItem("user")||"").position.substring(0, 2)}
        </div>
        <div className=" ml-[70px]  z-0 absolute flex flex-col min-w-[20px] shadow-md px-4 pl-10 py-2 rounded-md ">
          <h1 className=" text-[#2B3674] text-base font-semibold"> { JSON.parse( localStorage.getItem("user")|| "").first_name} { JSON.parse( localStorage.getItem("user")|| "").last_name}</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").email}</p>
        </div>
       </div>


       </div>

       <div className=" flex flex-col gap-2 mt-4 ">
       <p className=" font-semibold text-sm">Login Credentials</p>
       <div className=" flex flex-col gap-5 relative ">
        <div className="  flex flex-col min-w-[300px] shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Email</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").email}</p>
        </div>
        
        <div className="  flex flex-col min-w-[300px] shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Password</h1>
          <p className=" text-sm text-[#A3AED0]">**********</p>
        </div>

        <div className={loading?" cursor-pointer self-end flex items-center justify-center px-2 py-1 w-[150px] rounded-sm text-xs font-semibold bg-[#fdfaf3] border border-[#de9508] text-[#de9508] gap-1 pointer-events-none": " cursor-pointer self-end flex items-center justify-center px-2 py-1 w-[150px] rounded-sm text-xs font-semibold bg-[#fdfaf3] border border-[#de9508] text-[#de9508] gap-1"} onClick={Reset}>
          {loading?<Loader2Icon className=' animate-spin'/>:
          <img src={Shield} className=' h-[20px] object-contain' alt="" />
          }
          
          
           Reset Password </div>
       </div>


       </div>


       </div>
       <div className=" w-[60%] md:w-full ">
       <div className=" flex flex-col gap-2 ">
       <p className=" font-semibold text-sm">User Information</p>
       <div className="  grid grid-cols-3 slg:grid-cols-2 sm:grid-cols-1 relative gap-5 ">
       
       
        <div className=" row-span-1   col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">First Name</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").first_name}</p>
        </div>

        <div className="  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Surname</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").last_name}</p>
        </div>

        <div className="  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Email</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").email}</p>
        </div>


        <div className="  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Office</h1>
          <p className=" text-sm text-[#A3AED0]">{ officeName }</p>
        </div>

        <div className="  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ">
          <h1 className=" text-[#163961] text-sm font-semibold">Position</h1>
          <p className=" text-sm text-[#A3AED0]">{ JSON.parse( localStorage.getItem("user")|| "").position}</p>
        </div>
        
       

      
       </div>


       </div>

       </div>
</div>

       
    </div>
  );
};

export default Account;
