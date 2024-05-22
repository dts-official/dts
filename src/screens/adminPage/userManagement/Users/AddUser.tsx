import InputTemp from "@/components/input/Input"
import { useEffect, useState } from "react";
import axios from "./../../../../plugin/axios"
// import { AlertBox } from "@/components/alert/Alert";
import { useNavigate } from "react-router-dom";
import Dropdown1 from "./addDropdown/positionDropdown";
import Dropdown2 from "./addDropdown/officeDropdown";
import Swal from 'sweetalert2'
import { Loader2Icon } from "lucide-react";

const AddUser = () => {

    const navigate = useNavigate()

    // const [alert,setAlert]= useState({
    //     variant: "",
    //     title: "",
    //     description: ""
    // })

    const [alert,setAlert]= useState("")

    const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    office: "",
    password: "",
    acc_lvl: ""
    });

    useEffect(()=>{
        console.table(user)
    },[user])

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
        <div className=" w-full h-[100vh] bg-blue3 flex justify-center items-center">
            <div className=" w-[90%]  sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5">
            <div className=' sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between'>

                <div className='div1'>
                    <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight"> Register User </h1>
                    <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight "> Create New User</p>
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

                try {            
                    axios.post('users/', user, { 
                        headers: {
                            Authorization: `Token ${localStorage.getItem('keys')}`
                        }
                    })
                    .then(() => {
                        // setAlert({
                        //     variant: "success",
                        //     title: "Succesfully created a new account",
                        //     description: "The user may now login using the created account after confirming in their email!"
                        // })
    
                        setTimeout(()=>{
                            Swal.fire({
                                icon: "success",
                                title: "Succesfully created a new account",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }, 1000)
                        setTimeout(()=>{
                            // setAlert({
                            //     variant: "",
                            //     title: "",
                            //     description: ""
                            // })
                            setAlert('')
                            setUser({
                                first_name: "",
                                last_name: "",
                                email: "",
                                position: "",
                                office: "",
                                password: "",
                                acc_lvl: ""
                            });
                            navigate('/dts/admin/user')
                        },2000)

                        console.log(" Submitted")
    
                    });
                }
                catch (error:any) {
                    console.error("This is an error!", error);
                    setAlert('')
                    // setAlert({
                    //     variant: "error",
                    //     title: "Error",
                    //     description: error.message 
                    // })
                }
                     
                


                }} className=" grid grid-cols-3 gap-5 sm:gap-2 items-end">
                    
                <InputTemp
                    required={true}
                    label="First Name"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={user.first_name}
                    onChange={(e:any) => setUser({...user, first_name: e.target.value})}
                />

                <InputTemp
                    required={true}
                    label="Last Name"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={user.last_name}
                    onChange={(e:any)=> setUser({...user, last_name: e.target.value})}
                />
                
                <InputTemp
                    required={true}
                    type="email"
                    label="Email"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={user.email}
                    onChange={(e:any)=>setUser({...user, email: e.target.value})}
                />

                <Dropdown1
                    label="Position"
                    className='cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 '
                    setData={(value:any)=>setUser({...user, position: value})}
                    value = {user.position}
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
                    setData={(value:any)=>setUser({...user, office: value})}
                    // value = {offices.name}
                    options={JSON.parse(localStorage.getItem("offices")||"")}
                />


                <InputTemp
                    required={true}
                    type="password"
                    label="Password"
                    span=" col-span-1 sm:col-span-3 md:col-span-3"
                    value={user.password}
                    onChange={(e:any)=>setUser({...user, password:e.target.value})}
                />

                <div className="flex flex-col w-full col-span-3 ">
                    {!alert
                        ?<button 
                            type="submit" 
                            className='  w-full rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG mt-6 text-textG px-5 py-1 font-medium text-md
                    ' > Register User
                        </button>
                        :<button
                            className=" pointer-events-none text-textW bg-bgG hover:bg-bgG/10  transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
                            type="submit"         
                    > Loading <Loader2Icon className=' animate-spin'/> </button>
                    }
                </div>

                {/* <button type="submit" className=' mt-5 col-span-3 w-full
                            rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG  text-textG px-5 py-1 font-medium text-md
                        ' > Register User
                </button>  */}

            </form>

            
            {/* <div className=" flex w-[50%] self-center justify-center items-center bg-white rounded-lg">
                <AlertBox
                title = {alert.title}
                description = {alert.description}
                variant={alert.variant}     
                />
            </div> */}
            </div>
                     
        </div>
  )
}

export default AddUser