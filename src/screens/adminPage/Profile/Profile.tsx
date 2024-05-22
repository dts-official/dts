import { ThemeProvider } from "@/components/theme-provider";


import profile from '../../../assets/images/profile.webp'

import { PencilLine } from "lucide-react";


function Profile() {


    const genInfo = [
        { "entry" : "Surname", "applicable" : "Not applicable" },
        { "entry" : "First Name", "applicable" : "Not applicable" },
        { "entry" : "Middle Name", "applicable" : "Not applicable" },
        { "entry" : "Position", "applicable" : "Not applicable" },
        { "entry" : "Office", "applicable" : "Not applicable" },
        { "entry" : "City", "applicable" : "Not applicable" },
        { "entry" : "Province", "applicable" : "Not applicable" },
        { "entry" : "Region", "applicable" : "Not applicable" },
        { "entry" : "Citizenship", "applicable" : "Not applicable" },
        { "entry" : "Sex", "applicable" : "Not applicable" },
        { "entry" : "Civil Status", "applicable" : "Not applicable" },
        { "entry" : "Birthdate", "applicable" : "Not applicable" },
        { "entry" : "Cellphone No.", "applicable" : "Not applicable" },
    ]


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="  w-full h-full justify-center items-center bg-adminBG md:p-8 p-16 hideScroll overflow-y-scroll overflow-hidden scroll-smooth ">
            
            {/* top side */}
            <div className="  w-full h-full ">

                <p className=" text-textW text-[24px] font-normal mb-3  ">Profile</p>

                {/* left top */}
                <div className=" flex flex-row min-h-[200px] w-full lg:justify-center justify-between items-center lg:pl-0 pl-5 lg:flex-col ">

                    {/* admin name, email, profile pic */}
                    <div className=" flex flex-row items-center sm:w-full md:w-[80%] lg:w-[70%] w-full h-full lg:flex-col sm:px-0 lg:px-10 ">

                        {/* profile */}
                        <div className=" z-20 flex justify-center items-center sm:w-[160px] sm:h-[160px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] w-[170px] h-[170px] rounded-full">
                            <img className=" object-cover aspect-square w-full min-w-[120px] border-[10px] border-white rounded-full"
                                src={profile}
                                alt="profile"
                        />
                        </div>

                        <div className=" z-10 flex flex-col  lg:justify-center lg:items-center  md:w-[100%] w-[40%] h-[90px] lg:min-w-[300px] lg:w-[100%] lg:h-[80px] bg-white rounded-xl p-4 lg:pl-0 pl-10 translate-x-[-30px] sm:translate-y-[-20px] md:translate-y-[-10px] lg:translate-y-[-20px] lg:translate-x-[0px] ">
                            <p className=" text-[#2B3674] text-[20px] font-semibold truncate">Administrator</p>
                            <p className=" text-[#A3AED0] text-[16px] truncate">admin.dts@dict.gov.ph</p>
                        </div>

                        {/* admin password */}
                        <div className=" flex flex-col lg:justify-center lg:items-center  md:w-[100%] w-[40%] h-[90px] lg:min-w-[300px] lg:w-[100%] lg:h-[80px] bg-white rounded-xl p-4 lg:pl-0 ">
                            <div className=" flex flex-row w-full items-center lg:justify-center">
                                <p className=" text-[#2B3674] text-[20px] font-semibold mr-1 truncate">Password</p>
                                <PencilLine className=" text-adminBG h-[18px] w-[18px]" />
                            </div>
                            <p className=" text-[#A3AED0] text-[16px] truncate">**********************</p>
                        </div>
                    </div>


                </div>


                {/* General Information */}
                <div className=" flex flex-col w-full mt-4 lg:mt-10 ">

                    <p className=" text-textW text-[24px] font-normal ">General Information</p>

                    {/* container */}
                    <div className=" grid lg:grid-col-span-6 grid-cols-4 w-full h-full gap-4">

                        {genInfo.map((e) => {
                            return (
                                <div className="lg:col-span-2 col-span-1 flex flex-col justify-center h-[70px] w-full pl-4 mt-3 mr-2 bg-white rounded-xl">
                                    <p className="text-[#A3AED0] text-[14px]  mb-2">{e.entry}</p>
                                    <p className="text-[#2B3674] text-[13px] ">{e.applicable}</p>
                                </div>
                            );
                        })}

                    </div>


                </div>
                
            </div>

        </div>
    </ThemeProvider>
  )
}



export default Profile
