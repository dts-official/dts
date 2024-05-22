// import { AlertBox } from "@/components/alert/Alert";
import InputTemp from "@/components/input/Input"
import axios from "./../../../../plugin/axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Dropdown1 from "./updateDropdown/positionDropdown";
import Dropdown2 from "./updateDropdown/officeDropdown";
import Swal from 'sweetalert2'
import { Loader2Icon } from "lucide-react";

const UpdateUser = () => {

    const navigate = useNavigate()

    const [alert,setAlert]= useState("")

    // get user based on id
    const selectedUser = JSON.parse(localStorage.getItem("selectedUser")||"")
    const [userData, setUserData] = useState({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
        position: selectedUser.position,
        office: selectedUser.office,
        password: "",
    })

    const offices = JSON.parse(localStorage.getItem("offices")||"").find((office: any) => office.id === userData.office);


    useEffect(()=>{
        console.table(userData)
        console.log(offices)
    },[userData])


    return (
    <div className="  w-full h-[100vh] bg-blue3 flex justify-center items-center ">
        <div className=" w-[90%]  sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5">
            <div className=' sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between'>
                <div className='div1'>
                    <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight"> Edit User </h1>
                    <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight "> Update User</p>
                </div>

                <div className='  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  '>
                    <button className='
                        rounded-[5px] truncate border-2 border-red-600 hover:bg-bgG/10 transition-all duration-200 bg-red-600/20  text-red-600 px-5 py-1 font-medium text-xs
                    ' onClick={()=>{
                        navigate('/dts/admin/user')
                        
                    }} >Cancel
                    </button>                 
                </div>

            </div>
            <form onSubmit={(e:any)=>{
                e.preventDefault()

                setAlert("spin")

                let selectedUser = JSON.parse(localStorage.getItem("selectedUser")||"")
                let userId = selectedUser ? selectedUser.id : null;
                

                try {
                    // Remove the password as response if empty and then store the data on a new variable without the password
                    let dataToSend = Object.fromEntries(
                        Object.entries(userData).filter(([key, value]) => !(key === 'password' && value === ''))
                    );

                
                    axios.put('users/update/' + userId + '/', dataToSend, { 
                        headers: {
                            Authorization: `Token ${localStorage.getItem('keys')}`
                        }
                    })
                    .then(() => {                       
                        setTimeout(()=>{
                            Swal.fire({
                                icon: "success",
                                title: "You have successfully updated this user!",
                                showConfirmButton: false,
                                timer: 1500
                                })
                        }, 1000)
                        setTimeout(()=>{
                            setAlert('')
                            setUserData({
                                first_name: "",
                                last_name: "",
                                email: "",
                                position: "",
                                office: "",
                                password: "",
                            });  
                            
                            navigate('/dts/admin/user/')                        
                        },2000)
                        console.log("Updated User")

                    });
                }
                catch (error:any) {
                    console.error(error);
                }
                
                


            }} className=" grid grid-cols-3 gap-5 sm:gap-2 items-end">
            
                <InputTemp
                    required={true}
                    label="First Name"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={userData.first_name}
                    onChange={(e:any) => setUserData({...userData, first_name: e.target.value})}
                />

                <InputTemp
                    required={true}
                    label="Last Name"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={userData.last_name}
                    onChange={(e:any)=> setUserData({...userData, last_name: e.target.value})}
                />
                
                <InputTemp
                    required={true}
                    type="email"
                    label="Email"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={userData.email}
                    onChange={(e:any)=>setUserData({...userData, email: e.target.value})}
                />


                <Dropdown1
                    label="Position"
                    className='cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 '
                    setData={(value:any)=>setUserData({...userData, position: value})}
                    value = {userData.position}
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

                <Dropdown2
                    label="Office Designation"
                    className='cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 '
                    setData={(value:any)=>setUserData({...userData, office: value})}
                    value = {offices ? offices.name : ''}
                    options={JSON.parse(localStorage.getItem("offices")||"")}
                />

                <InputTemp
                    required
                    type="password"
                    label="Password"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={userData.password}
                    onChange={(e:any)=>setUserData({...userData, password:e.target.value})}
                />

                <div className="flex flex-col w-full col-span-3 ">
                    {!alert
                        ?<button 
                            type="submit" 
                            className='  w-full rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG mt-6 text-textG px-5 py-1 font-medium text-md
                    ' > Update User
                        </button>
                        :<button
                            className=" pointer-events-none text-textW bg-bgG hover:bg-bgG/10  transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
                            type="submit"         
                    > Loading <Loader2Icon className=' animate-spin'/> </button>
                    }
                </div>


            </form>


        </div>
    </div>
)}

export default UpdateUser