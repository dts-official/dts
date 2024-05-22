import { ChevronDown, ChevronLeft} from "lucide-react";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = ({head,lists,headLogo,direct}:any) => {

  
  const navigate = useNavigate()

  const [expand, setexpand] = useState(false);
 
  return (
    <>
    {
       !direct?
       <li 
       className=" list-none flex flex-col gap-3 relative mt-3"
       // onClick={onClick}
       >
         <div
           onClick={
             ()=>{
               setexpand(!expand)
             }
             
            }
           className={!expand?"hover:bg-[#bbbbbb4f] text-[#1B4B91]  hover:font-normal transition-colors  w-full flex cursor-pointer  py-2 rounded-sm justify-between px-2": "hover:bg-[#bbbbbb11] bg-[#bbbbbb4f] text-[#1B4B91]  hover:font-normal transition-colors  w-full flex cursor-pointer  py-2 rounded-sm justify-between px-2"}
         >
           <div className=" font-light flex items-center justify-between gap-1 md:justify-start w-full ">
               <div className=" flex gap-3 ">
               <img src={headLogo} alt=""  className=" h-5 object-contain" />
              
               <p className={!expand?" font-normal md:hidden": "font-semibold md:hidden" }>{head}</p>
               </div>
               
               { !(lists.length === 0)?  !expand? <ChevronLeft className=" h-4 w-4 text-[#1B4B91]"/> : < ChevronDown className="text-[#1B4B91] h-4 w-4" /> :""}
           </div>
           
         </div>
         {
           !(lists.length === 0)?
           <div className={    expand? " text-[#1B4B91] flex flex-col  relative  translate-x-[0%] md:pl-0  pl-6 space-y-2 opacity-100 transition-all duration-500 ease-in-out gap-4 ":" sm:pl-0 flex flex-col text-[#1B4B91]  translate-x-[-10%] md:translate-x-0 opacity-0 pointer-events-none gap-4  absolute " }>
         {lists.map((e:any,key:any)=>(
               <div
               onClick={
                 ()=>{
                   
                   navigate(e.link)
                 }
               }
               key={key}
               className=" hover:scale-[1.05] transition-all duration-150 m-0 flex w-full px-5 sm:px-3 md:px-3    rounded-sm cursor-pointer hover:bg-opacity-90 hover:font-semibold  items-center gap-2"
             >
               <img src={e.icon} className=" m-0 h-5 object-contain" alt={e.li} />
               <h1 className=" m-0 md:hidden ">{e.li}</h1> 
             </div>
   
           ))}
          
         </div>
           
           
           :""
         }
         
       </li>
       :
       <Link 
       to={direct}
       className=" list-none flex flex-col gap-3 relative mt-3"
       // onClick={onClick}
       >
         <div
           onClick={
             ()=>{
               setexpand(!expand)
             }
             
            }
           className={!expand?"hover:bg-[#bbbbbb4f] text-[#1B4B91]  hover:font-normal transition-colors  w-full flex cursor-pointer  py-2 rounded-sm justify-between px-2": "hover:bg-[#bbbbbb11] bg-[#bbbbbb4f] text-[#1B4B91]  hover:font-normal transition-colors  w-full flex cursor-pointer  py-2 rounded-sm justify-between px-2"}
         >
           <div className=" font-light flex items-center justify-between w-full ">
               <div className=" flex gap-3">
               <img src={headLogo} alt=""  className=" h-5 object-contain" />
              
               <p className={!expand?" font-normal md:hidden": "font-semibold md:hidden"}>{head}</p>
               </div>
               
           </div>
           
         </div>
        
         
       </Link>
    }
    
    </>
   
  );
};

export default Dropdown;