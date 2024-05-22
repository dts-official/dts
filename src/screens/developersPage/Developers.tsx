

import { ArrowBigDownDashIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

import angel from './../../assets/images/team_waya_waya/angel.webp'
import mark from './../../assets/images/team_waya_waya/mark.webp'
import ian from './../../assets/images/team_waya_waya/ian.webp'
import sofia from './../../assets/images/team_waya_waya/sofia.webp'
import jay_ann from './../../assets/images/team_waya_waya/jay_ann.webp'
import gia from './../../assets/images/team_waya_waya/gia.webp'
import johnrey from './../../assets/images/team_waya_waya/johnrey.webp'

const Developers = () => {

  const [lead] = useState([
    {
      name:"Angel Rose Naval",
      position:"System Analyst and Designer",
      school: "University of Science and Technology of Southern Philippines",
      img:angel,
      linkedin:"https://www.linkedin.com/in/angelrosenaval/"
     },
    
  ])


   const [devs] = useState([
{
    name:"Mark Gil P. Rusiana",
    position:"Web Developer",
    school: "University of Science and Technology of Southern Philippines",
    img:mark,
    linkedin:"https://www.linkedin.com/in/mark-gil-rusiana-97553a2ba/"
   },
   {
    name:"Ian Nico M. Caulin",
    position:" Web Developer",
    school: "University of Science and Technology of Southern Philippines",
    img:ian,
    linkedin:"https://www.linkedin.com/in/ian-nico"
   },
   {
    name:"Sofia Dara P. Alilin",
    position:"Web Developer",
    school: "University of Science and Technology of Southern Philippines",
    img:sofia,
    linkedin:"https://www.linkedin.com/in/sofia-alilin-15817a137/"

   },



   
  
   
   
])

const [analyst] = useState([
 

{
    name:"Jay Ann J. Abella",
    position:"System Analyst",
    school: "Mindanao State University at Naawan",
    img:jay_ann,
    linkedin:"https://www.linkedin.com/in/jay-ann-j-abella-7a7b1a249/"
   }, {
    name:"Gia C. Sumagang",
    position:"System Analyst",
    school: "University of Science and Technology of Southern Philippines",
    img:gia,
    linkedin:"https://www.linkedin.com/in/gia-sumagang-00b2302a2"
   },
{
    name:"Johrey E. Sarip",
    position:"System Analyst",
    school: "Mindanao State University at Naawan",
    img:johnrey,
    linkedin:"https://www.linkedin.com/in/johnrey-sarip-7865412ba/"
   }
])
  return (
    <div className=" w-full  min-h-screen overflow-hidden  overflow-y-scroll  flex flex-col bg-blue items-center ">

<a href="#down" 
  className="cursor-pointer bg-gray-800 px-3 py-5 mr-10 rounded-md text-white tracking-wider shadow-xl animate-bounce  fixed bottom-0 right-0  "
>
  <svg
    className="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</a>

      <nav className=" absolute py-10 flex w-full justify-between sm:justify-start items-center px-5 sm:px-2 sm:gap-2 gap-10">

        <Link to="/dts/" className=" cursor-pointer transition-all bg-[#3b82f6] text-white px-6 py-2 rounded-lg border-blue3 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 sm:scale-[.8] active:translate-y-[2px] flex items-center">

        
        <ArrowBigDownDashIcon className=" h-5 w-5 rotate-90 mr-2 "/>
          Back
        </Link>

        



<div></div>
      </nav>

      
        <div className=" grid-flow-row grid grid-cols-12 items-start gap-10 md:gap-5 w-[80%] min-h-full mb-20 overflow-x-hidden overflow-hidden ">

        <h1 className=" text-white font-bold text-4xl py-10 pb-5 sm:pl-20 sm:text-start font-sans col-span-12 text-center  leading-[2px] sm:leading-[14px] "> <span className=" text-base uppercase">Team</span>  <br /> <span className=" text-red-500">Waya</span>-<span className=" text-yellow">waya</span></h1>

        {lead.map((e:any,key:any)=>(
          
          <div key={key} className=" animate__animated animate__fadeInUp delay-200 hover:translate-y-[-10px] transition-all duration-1000 cursor-pointer  row-span-1   gap-1 flex flex-col col-span-12 justify-center  ">
              <div className=" relative flex  h-[200px]  justify-center items-center ">

              
              <img className="  h-[160px]  object-contain rounded-full border-[10px] border-gray-700" src={e.img} alt="" />
              <div className=" absolute flex items-center justify-center  h-[220px] w-[220px]">
             
               
              <a href={e.linkedin} target="__blank">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute right-0  h-6 w-6 drop-shadow-glow animate-bounce delay-75 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                 
                </a>
                
                  <a href={e.linkedin} target="__blank">

                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>


                  </a>
                  
                
                  {/* <LinkedinIcon className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white"/> */}
                  
              </div>
              

              <button className=" absolute bottom-0   border border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold scale-[.9] ">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10 text-base ">{e.position}</p>
              </button>
              </div>
              <div className=" flex flex-col gap-1 text-white text-center leading-[1px]">
            
                  <h1 className=" text-2xl  font-bold text-center ">{e.name} </h1>

                  
              
                  
                  <p className=" text-center text-white/80  font-light text-base">{e.school}</p>
                </div>

            



             
              
               
                  
          </div>
      ))}

          
        
        
        {devs.map((e:any,key:any)=>(
          
            <div key={key} className=" animate__animated animate__fadeInUp delay-500 row-span-1 hover:translate-y-[-10px] transition-all duration-1000    gap-1 flex flex-col col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 justify-center  ">
                <div className=" relative flex  h-[200px]  justify-center items-center ">

                
                <img className="  h-[160px]  object-contain rounded-full border-[10px] border-gray-700" src={e.img} alt="" />
                <div className=" absolute flex items-center justify-center  h-[220px] w-[220px]">
               
                 
                <a href={e.linkedin} target="__blank">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute right-0  h-6 w-6 drop-shadow-glow animate-bounce delay-75 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                   
                  </a>
                  
                    <a href={e.linkedin} target="__blank">

                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>


                    </a>
                    
                  
                    {/* <LinkedinIcon className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white"/> */}
                    
                </div>
                

                <button className=" absolute bottom-0   border border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold scale-[.8] ">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10 text-lg ">{e.position}</p>
                </button>
                </div>
                <div className=" flex flex-col gap-1 text-white text-center leading-[1px]">
              
                    <h1 className=" text-2xl  font-bold text-center ">{e.name} </h1>

                    
                
                    
                    <p className=" text-center text-white/80  font-light text-base">{e.school}</p>
                  </div>

              



               
                
                 
                    
            </div>
        ))}

{analyst.map((e:any,key:any)=>(
          
          <div id="down" key={key} className=" animate__animated animate__fadeInUp delay-700 row-span-1 hover:translate-y-[-10px] transition-all duration-1000    gap-1 flex flex-col col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 justify-center  ">
              <div className=" relative flex  h-[200px]  justify-center items-center ">

              
              <img className="  h-[160px]  object-contain rounded-full border-[10px] border-gray-700" src={e.img} alt="" />
              <div className=" absolute flex items-center justify-center  h-[220px] w-[220px]">
             
               
              <a href={e.linkedin} target="__blank">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute right-0  h-6 w-6 drop-shadow-glow animate-bounce delay-75 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                 
                </a>
                
                  <a href={e.linkedin} target="__blank">

                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white "><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>


                  </a>
                  
                
                  {/* <LinkedinIcon className=" cursor-pointer  absolute left-0  h-6 w-6 drop-shadow-glow animate-bounce duration-700 text-white"/> */}
                  
              </div>
              

              <button className=" absolute bottom-0   border border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold scale-[.8] ">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10 text-lg ">{e.position}</p>
              </button>
              </div>
              <div className=" flex flex-col gap-1 text-white text-center leading-[1px]">
            
                  <h1 className=" text-2xl  font-bold text-center ">{e.name} </h1>

                  
              
                  
                  <p className=" text-center text-white/80  font-light text-base">{e.school}</p>
                </div>

            



             
              
               
                  
          </div>
      ))}
     </div>


    </div>
  )
}

export default Developers