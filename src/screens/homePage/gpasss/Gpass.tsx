import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useState } from "react";
import InputTemp from "@/components/input/Input";
import axios from "../../../plugin/axios";
import DropdownReceive from "./dropdownReceive";
import DropdownTypes from "./dropdownTypes";
import Swal from 'sweetalert2'


function GPass() {

  const [onSubmit,setOnSubmit] = useState(false)
  
    const [data,setData]= useState({
      "reason": "",
      "specific": "",
      "departure": "",
      "returns": "",
      "venue": "",
"userID":JSON.parse(localStorage.getItem("user")||"").id,
      "position":JSON.parse(localStorage.getItem("user")||"").position,
      "requestor":  `${JSON.parse(localStorage.getItem("user")||"").first_name } ${JSON.parse(localStorage.getItem("user")||"").last_name}`,
      "to": "",
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
          

          axios.post('gpass/all/',data,{
            headers: {
              Authorization: `Token ${localStorage.getItem("keys")}`,
            }, 
          }).then((e:any)=>{
            console.log(e.data)
            setOnSubmit(!onSubmit)
            Swal.fire({
              icon: "success",
              title: "Succesfully Created",
              showConfirmButton: false,
              timer: 1500
            });
            setData({
              "reason": "",
              "specific": "",
              "departure": "",
              "returns": "",
              "venue": "",
        "userID":JSON.parse(localStorage.getItem("user")||"").id,
              "position":JSON.parse(localStorage.getItem("user")||"").position,
              "requestor":  `${JSON.parse(localStorage.getItem("user")||"").first_name } ${JSON.parse(localStorage.getItem("user")||"").last_name}`,
              "to": "",
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
                    <h1 className=" font-semibold text-base sm:text-xs">Gatepass</h1>
                    <p className=" text-xs font-medium sm:text-[8px]">Please make sure to check all items before submitting</p>
                </div>
                
                <Link to="/dts/home/dashboard" onClick={()=>{
            localStorage.setItem("nav","")
        }} className=" flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Cancel
                </Link>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-4 gap-3  sm:grid-cols-1  " onSubmit={handleSubmit}>

            <DropdownTypes onSubmit={onSubmit} data={data} setData={setData} label="Select Reason" className='cursor-pointer col-span-4 sm:col-span-1 '/>

                

                

                <InputTemp label = "Time of Departure" placeholder="E.g Officer1" span="col-span-2 sm:col-span-1"
                type="datetime-local"
                value={data.departure}
                name="departure"
                onChange={onChangeInput}
                />
                <InputTemp label = "Time of Returns" placeholder="E.g Officer1" span=" col-span-2 sm:col-span-1"
                type="datetime-local"
                value={data.returns}
                name="returns"
                onChange={onChangeInput}
                />
                

                <InputTemp label = "Venue" placeholder="E.g N Hotel, Cagayan de Oro Mis. Or" span="col-span-4 sm:col-span-1"
                
                value={data.venue}
                name="venue"
                onChange={onChangeInput}
                
                />
              

                <DropdownReceive
                label="Approved by"
                className='cursor-pointer col-span-4 sm:col-span-1 '
                data={data}
                setData={setData}
                options={JSON.parse(localStorage.getItem("offices") ||"")}
                />

                   
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-4 sm:col-span-1">
                    Submit
                </Button>
                
            </form>
            
        </div>
    </div>
    </>
    
  )
}

export default GPass