import { ThemeProvider } from "@/components/theme-provider";
import AuditTable from "./auditTable/Table";


function AuditTrail() {


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className=" flex flex-col w-full h-full bg-adminBG lg:p-10 p-20 ">

            <p className=" text-textW text-[24px] font-normal mb-10  ">Audit Trail</p>

            <div className=" flex flex-col bg-white w-full md:h-[90%] h-[95%] pb-2 rounded-xl overflow-hidden ">

                
                {/* Tickets, Done, and Delete Box */}
                {/* <div className=" flex flex-row w-full h-[90px] p-8 ">

                    <p className=" text-[#2B3674] text-[28px] font-bold mr-40 lg:mr-20 md:mr-5 ">Tickets</p>

                    <div className=" py-4 px-5 sm:px-1  flex flex-row justify-center items-center gap-3 bg-[#A6E7D8] border-[2px] border-[#00B087] rounded-sm hover:opacity-75 cursor-pointer mr-5 sm:mr-2 ">
                        <CheckCircle className=" text-[#008767]"/>
                        <p className=" text-[#008767] sm:hidden">Done</p>
                    </div>

                    <div className=" py-4 px-5 sm:px-1  flex flex-row justify-center items-center gap-3 bg-[#FFE4E4] border-[2px] border-[#C91B1B] rounded-sm hover:opacity-75 cursor-pointer">
                        <TrashIcon className=" text-[#C91B1B] "/>
                        <p className=" text-[#C91B1B] font-semibold sm:hidden">Delete</p>
                    </div>

                </div> */}


                <div className=" flex flex-col w-full h-full overflow-hidden pt-8 ">
                    
                    {/* table */}
                    <div className=" flex w-full h-full px-8 overflow-hidden ">

                        <AuditTable />

                    </div>


                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}



export default AuditTrail
