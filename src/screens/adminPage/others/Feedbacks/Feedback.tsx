import { ThemeProvider } from "@/components/theme-provider";
import { CheckCircle, TrashIcon } from "lucide-react";
import FeedbacksTable from "./FeedbacksTable/Table";


function Feedback() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" flex flex-col w-full h-full bg-adminBG lg:p-10 p-20 ">

            <p className=" text-textW text-[24px] font-normal mb-10  ">Others/Tickets</p>

            <div className=" flex flex-col bg-white w-full md:h-[90%] h-[80%] pb-2 rounded-xl overflow-hidden ">

                
                {/* Tickets, Done, and Delete Box */}
                <div className=" flex flex-row w-full h-[90px] p-8 ">

                    <p className=" text-[#2B3674] text-[28px] font-bold mr-40 lg:mr-20 md:mr-5 ">Tickets</p>

                    <div className=" py-4 px-5 sm:px-1  flex flex-row justify-center items-center gap-3 bg-[#A6E7D8] border-[2px] border-[#00B087] rounded-sm hover:opacity-75 cursor-pointer mr-5 sm:mr-2 ">
                        <CheckCircle className=" text-[#008767]"/>
                        <p className=" text-[#008767] sm:hidden">Done</p>
                    </div>

                    <div className=" py-4 px-5 sm:px-1  flex flex-row justify-center items-center gap-3 bg-[#FFE4E4] border-[2px] border-[#C91B1B] rounded-sm hover:opacity-75 cursor-pointer">
                        <TrashIcon className=" text-[#C91B1B] "/>
                        <p className=" text-[#C91B1B] font-semibold sm:hidden">Delete</p>
                    </div>

                </div>


                <div className=" flex flex-col w-full h-full overflow-hidden ">
                    
                    {/* table */}
                    <div className=" flex w-full h-full px-8 overflow-hidden ">

                        <FeedbacksTable />

                        {/* <table className="table-auto w-full ">

                            <thead className=" border-b-2 ">
                                <tr>
                                    <th className=" w-[30%] ">
                                        <div className=" flex flex-row items-center gap-2">
                                        <p className=" text-[#436BBE] text-[14px] font-semibold ">Ticket Title</p>
                                        <ChevronDown className=" text-[#A3AED0] " />
                                        </div>
                                    </th>
                                    <th className=" w-[15%] ">
                                        <div className=" flex flex-row items-center gap-2">
                                        <p className=" text-[#436BBE] text-[14px] font-semibold ">Category</p>
                                        <ChevronDown className=" text-[#A3AED0] " />
                                        </div>
                                    </th>
                                    <th className=" w-[25%] ">
                                        <div className=" flex flex-row items-center gap-2">
                                        <p className=" text-[#436BBE] text-[14px] font-semibold ">Email</p>
                                        <ChevronDown className=" text-[#A3AED0] " />
                                        </div>
                                    </th>
                                    <th className=" w-[20%] "> 
                                        <div className=" flex flex-row items-center gap-2">
                                        <p className=" text-[#436BBE] text-[14px] font-semibold ">Date</p>
                                        <ChevronDown className=" text-[#A3AED0] " />
                                        </div>
                                    </th>
                                    <th className=" w-[10%] ">
                                        <div className=" flex flex-row items-center gap-2">
                                        <p className=" text-[#436BBE] text-[14px] font-semibold ">Status</p>
                                        <ChevronDown className=" text-[#A3AED0] " />
                                        </div>
                                    </th>                                                                              
                                </tr>
                                
                            </thead>

                            <tbody >

                                {tickets.slice(currentPage * 8, (currentPage + 1) * 8).map((e, index)=>(         
                                    <tr  key={index}>
                                        <td>
                                            <div className=" flex flex-row items-center ">
                                                <input 
                                                    className=" w-5 h-5 "
                                                    type="checkbox" checked={checkedItems[index] || false}
                                                    onChange={() => handleCheckboxChange(index)}/>
                                                <p className=" text-[#2B3674] font-semibold ml-3">{e.Ticket_Title}</p>
                                            </div>
                                        </td>
                                        <td className=" text-[#2B3674] font-semibold">{e.Category}</td>
                                        <td className=" text-[#2B3674] font-semibold">{e.Email}</td>
                                        <td className=" text-[#2B3674] font-semibold">{e.Date}</td>
                                        <td className=" text-[#2B3674] font-semibold w-[110px] h-[50px]">
                                            {e.Status === "Done" 
                                            ? 
                                            <div className=" bg-[#A6E7D8] flex flex-row w-[110px] h-[35px] justify-center items-center gap-3 border-[2px] border-[#008767] rounded-[3px] cursor-not-allowed">
                                                <CheckCircle className=" text-[#008767] w-4 h-4" />
                                                <p className=" text-[#008767] text-[13px]">Done</p>
                                            </div> 
                                            : 
                                            <div className=" bg-[#FFFBF3] py-1 flex flex-row w-[110px] h-[35px] justify-center items-center gap-3 border-[2px] border-[#EBA715] rounded-[3px] cursor-not-allowed">
                                            <FileWarning className=" text-[#EBA715] w-4 h-4" />
                                            <p className=" text-[#EBA715] text-[13px] ">Pending</p>
                                            </div>
                                            }
                                        </td>
                                    </tr>    
                                ))}



                            </tbody>

                        </table> */}


                    </div>


                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}



export default Feedback
