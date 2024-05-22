import InputTemp from "@/components/input/Input"
import { useEffect, useState } from "react";

import axios from "./../../../../plugin/axios"
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/addOfficeDropdown";
import { Loader2Icon } from "lucide-react";
import Swal from "sweetalert2";

const AddOffice = () => {

    const navigate = useNavigate()

    const [alert,setAlert]= useState('')

    const [officeData, setOfficeData] = useState({
    name: "",
    officeMail: "",
    street: "",
    city: "",
    province: "",
    region: ""
    });

    useEffect(()=>{
        console.table(officeData)
    },[officeData])

    return (

    <div className="  w-full h-[100vh] bg-blue3 flex justify-center items-center ">

        <div className=" w-[90%]  sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5">

        <div className=' sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between'>

            <div className='div1'>
                <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight"> Register Office</h1>
                <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight "> Create New Office</p>
            </div>

            <div className='  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  '>

                <button className='
                    rounded-[5px] truncate border-2 border-red-600 hover:bg-bgG/10 transition-all duration-200 bg-red-600/20  text-red-600 px-5 py-1 font-medium text-xs
                ' onClick={()=>{
                    navigate('/dts/admin/offices')
                }} >Cancel
                </button>   

            </div>
               
        </div>
   
        <form onSubmit={(e:any)=>{
            e.preventDefault()


            setAlert("spin")


            try {            
                axios.post('office/all/', officeData, { 
                    headers: {
                        Authorization: `Token ${localStorage.getItem('keys')}`
                    }
                })
                .then(() => {
                    // setAlert({
                    //     variant: "success",
                    //     title: "Succesfully created a new office",
                    //     description: "The new office has been added to the system. You can now assign users to this office."
                    // })
                    setTimeout(()=>{
                        Swal.fire({
                            icon: "success",
                            title: "Succesfully created a new office",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }, 1000)
                    setTimeout(()=>{
                        
                        setOfficeData({
                            name: "",
                            officeMail: "",
                            street: "",
                            city: "",
                            province: "",
                            region: ""
                        });
                        navigate('/dts/admin/offices')
                    },2000)

                    console.log(" Submitted")

                });
            }
            catch (error:any) {
                console.error(error);
               
            }


            }} className=" grid grid-cols-3 gap-5 sm:gap-2 items-end">

            <InputTemp
                label="Bureau"
                placeholder="e.g Cyber Sec."
                span=" col-span-1 sm:col-span-3" 
                value={officeData.name}
                onChange={(e:any) => setOfficeData({...officeData, name: e.target.value})}
            />

            <InputTemp
                type="email"
                label="Office Email"
                placeholder="antonioluna@gmail.com"
                span=" col-span-1 sm:col-span-3 md:col-span-3"    
                value={officeData.officeMail}
                onChange={(e:any) => setOfficeData({...officeData, officeMail: e.target.value})}        
            />

            <InputTemp
                label="Street/Barangay"
                placeholder="e.g Rizal st."
                span=" col-span-1 sm:col-span-3"
                value={officeData.street}
                onChange={(e:any) => setOfficeData({...officeData, street: e.target.value})}
            />

            <InputTemp
                label="City"
                placeholder="e.g Cagayan de Oro City"
                span=" col-span-1 sm:col-span-3"
                value={officeData.city}
                onChange={(e:any) => setOfficeData({...officeData, city: e.target.value})}
            />

            <InputTemp
                label="Province"
                placeholder="e.g Misamis Oriental"
                span=" col-span-1 sm:col-span-3"
                value={officeData.province}
                onChange={(e:any) => setOfficeData({...officeData, province: e.target.value})}
            />

            <Dropdown
                label="Select Region"
                className='cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 '
                setData={(value:any)=>setOfficeData({...officeData, region: value})}
                value = {officeData.region}
                options={
                [
                    {id:1,name:"Region I - Ilocos Region" },
                    {id:2,name:"Region II - Cagayan Valley"},
                    {id:3,name:"Region III - Central Luzon"},
                    {id:4,name:"Region IV-A - CALABARZON"},
                    {id:5,name:"Region IV-B - MIMAROPA"},
                    {id:6,name:"Region V - Bicol Region"},
                    {id:7,name:"Region VI - Western Visayas"},
                    {id:8,name:"Region VII - Central Visayas"},
                    {id:9,name:"Region VIII - Eastern Visayas"},
                    {id:10,name:"Region IX - Zamboanga Peninsula"},
                    {id:11,name:"Region X - Northern Mindanao"},
                    {id:12,name:"Region XI - Davao Region"},
                    {id:13,name:"Region XII - SOCCSKSARGEN"},
                    {id:14,name:"Region XIII - Caraga"},
                    {id:15,name:"National Capital Region (NCR)"},
                    {id:16,name:"Cordillera Administrative Region (CAR)"},
                    {id:17,name: "Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)"},

                ]
                }
            /> 

            <div className="flex flex-col w-full col-span-3 ">
                {!alert
                    ?<button 
                        type="submit" 
                        className='  w-full rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG mt-6 text-textG px-5 py-1 font-medium text-md
                ' > Add Office
                    </button>
                    :<button
                        className=" pointer-events-none text-textW bg-bgG hover:bg-bgG/10  transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 "
                        type="submit"         
                > Loading <Loader2Icon className=' animate-spin'/> </button>
                }
            </div>          

            {/* <button type="submit" className=' mt-5 col-span-3 w-full
                        rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG  text-textG px-5 py-1 font-medium text-md
                    ' > Add Office
            </button>  */}

        </form>

        <div className=" flex w-[50%] self-center justify-center items-center bg-white rounded-lg">
         
        </div>
                    
    </div>
    </div>
  )
}

export default AddOffice