import bg from "../../../assets/images/DICT-bg.webp";
import logo from "../../../assets/images/DICT-Banner-Logo.webp";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertBox } from "../../../components/alert/Alert";
import axios from "../../../plugin/axios";
import { Loader2Icon } from "lucide-react";

import Dropdown1 from "@/screens/authentication/registration/officeDropdown";
import Dropdown2 from "./positionDropdown";
import Swal from 'sweetalert2'


function RegistrationPage() {
  
    
    const [user, setUser] = useState({ 
      email: "", 
      first_name: "", 
      last_name: "", 
      password: "", 
      re_password: "",  
      position: "", 
      office: "",    
      acc_lvl: 0
    });


    //warning
    const [alert,setAlert]= useState("")



    // re_password warning
    const [isTyping, setIsTyping] = useState(false);

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
      setPasswordVal(validatePassword(user.password))
    },[user.password])
  
    useEffect(()=>{
      if (user.password == user.re_password && user.password !="" && user.re_password!="") {
        setConfirmPasswordVal(true)
      }else{
        setConfirmPasswordVal(false)
      }
    },[user.password,user.re_password])

    const [offices,setOffices] = useState([])

    //get office id and name to be used in the dropdowwn
    const getAllOfficeNameAndID = async () => {
      await axios.get('office/all')
      .then(response => {
        setOffices(response.data)
          
         
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
        }
        console.error(error.config);
        });
    }

    useEffect(()=>{
      getAllOfficeNameAndID()
    },[])



    // to be used for mapping in the designation
    

    // setting the acc_lvl of user based on the selected position
    useEffect(() => {
      const positionLevels:any = {
        'Regional Director': 1,
        'Provincial Officer': 2,
        'Project Development Officer I': 3,
        'Project Development Officer II': 3,
        'Project Development Officer III': 3,
        'Cyber Security Officer I': 3,
        'Cyber Security Officer II': 3,
        'Cyber Security Officer III': 3,
      };

      if (positionLevels[user.position]) {
        setUser({...user, acc_lvl: positionLevels[user.position]});
      }
    }, [user.position]);



  return (
   
      <div className=" grid grid-cols-6 bg-background h-screen w-screen  flex-row justify-center bg-blue2 overflow-hidden ">
        <Link to="/dts/developers" className="  z-50 absolute text-white bottom-0  p-10 bg-blue2 px-3 py-2 ">
          <p className="  text-xs">Developed by: <span className=" font-semibold hover:underline">DTS Team</span> </p>
        </Link>
       
       
        {/* image */}
        <div className=" flex md:hidden col-span-4 lg:col-span-3">
          <img
            className=" object-cover  w-full animate__animated animate__slideInDown"
            src={bg}
            alt="DICT_bg"
          />
        </div>

       

        {/* login form */}
        <div className=" relative sm:justify-center px-16 lg:col-span-3  col-span-2 md:col-span-6 flex flex-col justify-start items-center h-full w-full   animate__animated animate__slideInUp bg-blue2 mt-20 lg:mt-10 overflow-hidden">
          
         
          <form className=" flex flex-col min-h-[200px] w-full max-w-[550px] md:max-w-[550px] mb-20 "
            onSubmit={ async (e: any) => {
                e.preventDefault();

                setAlert("s")

                if (confirmpasswordVal && passwordVal) {
                  try {

                    axios.post("/users/",user).then((response:any)=>{
                       console.log(response.data)
                       Swal.fire({
                        icon: "success",
                        title: "Succesfully Registered - Please Check your Email",
                        showConfirmButton: false,
                        timer: 1500
                      });
                       setUser({ 
                        email: "", 
                        first_name: "", 
                        last_name: "", 
                        password: "", 
                        re_password: "",  
                        position: "", 
                        office: "", 
                        acc_lvl: 0    
                      })
                       setTimeout(()=>{
                           setAlert("")
                       },3000)
                       
   
                   }) 
                   } 
                   catch (error) {
                       console.error(error);
                       setAlert("error");
                       setTimeout(()=>{
                           setAlert("");
                       },3000);
                   }
                }

             
                
            }}
          >

            {/* logo */}
            <div className=" flex flex-col gap-10 mb-5 z-50">

            
              <img
                className="  w-[60%] object-contain self-center"
                src={logo}
                alt="DICT_bg"
              />
             

              <p className=" text-textW text-[25px] font-semibold ">
                Register Account
              </p>

            </div>

            <div className=" flex flex-col h-auto w-full overflow-y-scroll hideScroll z-10">

                {/* First Name & Last Name */}
                <div className="flex flex-row w-full gap-4 mb-3">

                    <div className="flex flex-col w-[50%]">
                        <label className=" text-textW mb-1"> First Name </label>
                        <input
                        className=" w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        onChange={(event) => {
                            setUser({ ...user, first_name: event.target.value });
                        }}
                        required
                        />
                    </div>

                    <div className="flex flex-col w-[50%]">
                        <label className=" text-textW mb-1"> Last Name </label>
                        <input
                        className=" w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        onChange={(event) => {
                            setUser({ ...user, last_name: event.target.value });
                        }}
                        required
                        />
                    </div>

                </div>


                {/* Office Designation & Position */}
                <div className="flex flex-row w-full gap-4 mb-3">

                    <Dropdown1
                      label="Office Designation"
                      className='cursor-pointer col-span-3 sm:col-span-1 '
                      data={user}
                      setUser={setUser}
                      options={ offices }
                    />


                    <Dropdown2
                      label="Position"
                      className='cursor-pointer col-span-3 sm:col-span-1 '
                      setUser={(value:any)=>setUser({...user, position: value})}
                      options={
                        [
                          {id:1,name:"Regional Director"},
                          {id:2,name:"Provincial Officer"},
                          {id:3,name:"Project Development Officer I"},
                          {id:4,name:"Project Development Officer II"},
                          {id:5,name:"Project Development Officer III"},
                          {id:6,name:"Cyber Security Officer I"},
                          {id:7,name:"Cyber Security Officer II"},
                          {id:8,name:"Cyber Security Officer III"},
      
                        ]
                      }
                    />

                </div>

                {/* Email Address */}
                <div className="flex flex-col w-full">
                    <label className=" text-textW mb-1"> Email Address </label>
                    <input
                    className=" w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(event) => {
                        setUser({ ...user, email: event.target.value });
                    }}
                    required
                    />

                </div>

                {/* Password */}
                <div className=" w-full flex flex-col">
                    <label className=" text-textW mt-3 mb-1"> Password </label>
                    <input
                    className="w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                    }}
                    required
                    />

                    {/* warning */}
                    {!passwordVal?
                    <p className="text-[12px] text-[#ff4400] text-justify mt-2 ">Password must contain at least 8 characters with uppercase, lowercase, and special characters</p>
                    :
                    <p className="text-[12px] text-[#15ff00] text-justify mt-2 ">Valid Password</p>

                }
                    

                </div>

                {/* Confirm Password */}
                <div className=" w-full flex flex-col bg">
                    <label className=" text-textW mt-3 mb-1"> Confirm Password </label>
                    <input
                    className="w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4 "
                    type="password"
                    name="re_password"
                    value={user.re_password}
                    onChange={(event) => {
                        setUser({ ...user, re_password: event.target.value });
                        setIsTyping(true)
                    }}
                    required
                    />

                    {/* warning */}    
                    {
                      isTyping && (
                        user.password == user.re_password && user.password.length != 0
                          ? <p className="text-[12px] text-[#1aff00] text-justify mt-2">Password matched.</p>
                          : <p className="text-[12px] text-[#ff4400] text-justify mt-2">Password doesn't match!</p>
                      )
                    }
                    

                </div>



                <div className="w-full flex mt-5">
                    <p className="text-white text-[12px] text-justify">*By registering, you accept that your data are being stored in accordance with our privacy policy.</p>
                </div>
                
            
                {/* Register button */}
                <div className="flex flex-col w-full">
                    {
                    !alert?<button
                    className=" w-full text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px]  h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 self-center"
                    type="submit"
                    
                    > Register Account </button>:
                    <button
                    className=" pointer-events-none text-textW bg-yellow hover:bg-yellow/80 transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
                    type="submit"
                    
                    > Loading <Loader2Icon className=' animate-spin'/> </button>
                    }
                </div>

                <hr  className="  border-none pb-10"/>

          

            <div className=" flex w-full min-h-[10px] justify-center items-center">
              
              <Link to="/dts/login" className=" text-sm text-accent">
              Already have an Account? <b className=" hover:underline">Sign In now</b> 
              </Link>
            </div>

                

                <div className="  flex justify-center items-center bg-white rounded-lg mt-5">
                    <AlertBox
                    variant={alert}     
                    />
                </div>
               
                
            </div> 
          </form>
        </div>
      </div>
  );
}

export default RegistrationPage;
