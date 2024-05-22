import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import {useState } from "react";
import InputTemp from "@/components/input/Input";
import axios from "../../../plugin/axios";
import DropdownReceive from "./dropdownReceive";
import DropdownTypes from "./dropdownTypes";
import Swal from 'sweetalert2'


function Letter() {
    
  
    const [data,setData]= useState({
      "title": "",
      "userID":JSON.parse(localStorage.getItem("user")||"").id,
      "position":JSON.parse(localStorage.getItem("user")||"").position,
      "type":"",
      "requestor":  `${JSON.parse(localStorage.getItem("user")||"").first_name } ${JSON.parse(localStorage.getItem("user")||"").last_name}`,
      "to": "",
      "message":"",
  })

  const onChangeInput = (e: any) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  function validateData(data:any) {
    for (let key in data) {
        if (data[key] === "" || data[key] === null || data[key] === undefined) {
            return false;
        }
    }
    return true;
}




    const handleSubmit = (e:any) =>{
        e.preventDefault()
        console.log(data)
        

        if (validateData(data)) {
          

          axios.post('document/all/',data,{
            headers: {
              Authorization: `Token ${localStorage.getItem("keys")}`,
            }, 
          }).then((e:any)=>{
            console.log(e.data)
            Swal.fire({
              icon: "success",
              title: "Succesfully Created",
              showConfirmButton: false,
              timer: 1500
            });
            setData({
              "title": "",
        "userID":JSON.parse(localStorage.getItem("user")||"").id,
        "position":JSON.parse(localStorage.getItem("user")||"").position,
        "type":"",
        "requestor":  `${JSON.parse(localStorage.getItem("user")||"").first_name } ${JSON.parse(localStorage.getItem("user")||"").last_name}`,
        "to": "",
        "message":"",
          })
          }).catch((e:any)=>{
            console.log(e.data)
          })
          
        }else{
          Swal.fire({
            icon: "error",
            title: "Oops...Empty Fields",
            text: "Some fields are Empty please fill it, thanks :) !"
          });
        }
        
  

        
    }
  

  
  return (
    <>
    <div className=" relative  rounded-[5px] h-screen w-full pb-36 sm:pb-20 sm:pt-0  overflow-y-scroll flex items-start justify-center gap-5  ">
        <div className=" rounded-md relative animate__animated animate__fadeInUp mt-5 mb-20  w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" sm:sticky flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">File Document Request</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Please make sure to check all items before submitting</p>
                </div>
                
                <Link to="/dts/home/dashboard" onClick={()=>{
            localStorage.setItem("nav","")
        }} className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Cancel
                </Link>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1  " onSubmit={handleSubmit}>
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor Sheeesh" span="col-span-2 sm:col-span-1"
                
                value={data.requestor}
                name="requestor"
                onChange={onChangeInput}
                
                />
                <InputTemp label = "Designation / Position" placeholder="E.g Officer1" span="col-span-1 sm:col-span-1"
                value={data.position}
                name="position"
                onChange={onChangeInput}
                />
                

                <InputTemp label = "Title of the Document" placeholder="E.g Request Letter" span="col-span-2 sm:col-span-1"
                
                value={data.title}
                name="title"
                onChange={onChangeInput}
                
                />
                <DropdownTypes data={data} setData={setData} label="Document Type" className='cursor-pointer col-span-1 sm:col-span-1 '/>

                <InputTemp label = "Message" placeholder="Type you reason" span="col-span-3 sm:col-span-1"
                value={data.message}
                name="message"
                onChange={onChangeInput}
                />

                <DropdownReceive
                label="Receiver"
                className='cursor-pointer col-span-3 sm:col-span-1 '
                data={data}
                setData={setData}
                options={JSON.parse(localStorage.getItem("offices") ||"")}
                />

                   
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1">
                    Submit
                </Button>
                
            </form>
            
        </div>
    </div>
    </>
    
  )
}

export default Letter