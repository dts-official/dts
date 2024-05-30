import { useEffect, useState } from "react";
import axios from "../../../../plugin/axios";
import { useNavigate } from "react-router-dom";
import LabelTemp from "@/components/input/label";

function Form() {
    const [data,setData]= useState(JSON.parse(localStorage.getItem("selected") ||""))

    let navigate = useNavigate()



    async function  getUserDetails (){
     await axios.get(`users/user/${data.signedBy}/`,{
      headers: {
        Authorization:  `Token ${localStorage.getItem("keys")} `,
      }, 
    }).then((e:any)=>{

      setData({...data,status: e.data.detail})
     
    }).catch((e:any)=>{
      console.log(e.data)
    })
  }

  useEffect( ()=>{
    getUserDetails()
    
  },[])
   

  

 

 




  
  return (
    <>
    
    <div className=" relative  rounded-[5px] h-screen w-full pb-40 sm:pb-20 sm:pt-0  overflow-y-scroll flex items-start justify-center gap-5   ">
        <div className=" rounded-md relative animate__animated animate__fadeInUp mt-5 mb-20  w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">{"Received Document "}</h1>
                   
                    <p className=" text-xs font-medium sm:text-[8px]">information and details of Requested Document</p>
                </div>
                
                <div onClick={()=>{
                  navigate("/dts/home/document/completed")
                }}  className=" cursor-pointer flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Back
                </div>
            </div>
            <div className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    " >
                <LabelTemp 
                label = "Name of the Requestor"
                span="col-span-2 sm:col-span-1"

                value={data.requestor}
                
                />
                <LabelTemp 
                label = "Designation / Position" 
                span="col-span-1 sm:col-span-1"
                value={data.position}
                />

                <LabelTemp label = "Title of the Document"
                span="col-span-2 sm:col-span-1" 
                value={data.title}
                
                />
            
                <LabelTemp 
                
                value={data.type}
                label="Document Type"
                 className='cursor-pointer col-span-1 sm:col-span-1 '/>
                
                <LabelTemp 
                label ="Message"
                span="col-span-3 sm:col-span-1"
                
                value={data.message}
                />

               <LabelTemp 
                label ="Remarks" span="col-span-2 sm:col-span-1"
                
                value={data.remarks}
                />

              <LabelTemp 
                label ="Status" span=" col-span-1 sm:col-span-1"
                
                value={`Received by ${data.status}`}
                />
              
                
            </div>
            
        </div>
    </div>
    </>
    
  )
}

export default Form