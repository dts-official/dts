import { Button } from "@/components/ui/button"
import { useState } from "react";
import InputTemp from "@/components/input/Input";
import axios from "../../../../plugin/axios";
import { useNavigate } from "react-router-dom";
import DropdownReceive from "../dropdownReceive";
import DropdownTypes from "../dropdownTypes";
import Swal from 'sweetalert2'

function Form() {





    const [data,setData]= useState(JSON.parse(localStorage.getItem("selected") ||""))

    const [editable] = useState(data.userID == JSON.parse(localStorage.getItem("user") ||"").id)
    let navigate = useNavigate()
    
   

  
  const onChangeInput = (e: any) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


 

 




    const handleSubmit = (e:any) =>{
        e.preventDefault()
        if (editable) {
          axios.put(`document/${data.id}`,data,{
            headers: {
              Authorization: `Token ${localStorage.getItem("keys")} `,
            }, 
          }).then((_e:any)=>{
            Swal.fire({
              icon: "success",
              title: "Update Succesfully",
              showConfirmButton: false,
              timer: 1500
            });
           
            setData({
              "id":"",
              "title": "",
              "type":"",
              "requestor": "",
              "doctype": "",
              "message":"",
              "status":"",
              "position":"",
              "remarks": ""
          })
          setTimeout(()=>{
            navigate('/dts/home/document/process')
            },1500)
          }).catch((e:any)=>{
            console.log(e.data)
          })
          
        }else{
          axios.patch(`document/sign_document/${data.id}`,{
            remarks: data.remarks
        },{
            headers: {
              Authorization: `Token ${localStorage.getItem("keys")} `,
            }, 
          }).then((_e:any)=>{
            Swal.fire({
              icon: "success",
              title: "Received Succesfully",
              showConfirmButton: false,
              timer: 1500
            });
            setData({
              "id":"",
              "title": "",
              "type":"",
              "requestor": "",
              "doctype": "",
              "message":"",
              "status":"",
              "position":"",
              "remarks": ""
          })
          setTimeout(()=>{
            navigate('/dts/home/document/completed')
            },1500)
          }).catch((e:any)=>{
            console.log(e.data)
          })

        }

        
  

        
    }
  

  
  return (
    <>
    
    <div className=" relative    min-h-full w-full sm:pb-20 sm:pt-0  flex items-start justify-center gap-5  mt-5 overflow-y-scroll pb-24  ">
        <div className=" relative rounded-md animate__animated animate__fadeInUp w-[80%] sm:w-full sm:mx-5 max-w-[1366px] sm:px-2 px-10 border-dashed border border-blue/50 bg-white min-h-[200px] pb-5">
            <div className=" w-full flex items-center justify-between py-4 ">
                <div className=" flex flex-col leading-2">
                    <h1 className=" font-semibold text-base sm:text-xs">{editable? "Editable File Details": "Received File Details"}</h1>
                    {editable?<p className=" text-xs text-red-600 font-medium sm:text-[8px]">*Note that once you click save it will update you document details</p>:
                    <p className=" text-xs font-medium sm:text-[8px]">Don’t forget to leave remarks of the before clicking Received</p>}
                </div>
                
                <div onClick={()=>{
                  navigate("/dts/home/document/process")
                }}  className=" cursor-pointer flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Back
                </div>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-3 gap-3  sm:grid-cols-1    " onSubmit={handleSubmit}>
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor Sheeesh" span="col-span-2 sm:col-span-1"
                disabled = {!editable}
                value={data.requestor}
                name="requestor"
                onChange={onChangeInput}
                
                />
                <InputTemp label = "Designation / Position" placeholder="E.g Officer1" span="col-span-1 sm:col-span-1"
                disabled = {!editable}
                value={data.position}
                name="position"
                onChange={onChangeInput}
                />

                <InputTemp label = "Title of the Document" placeholder="E.g Letter" span="col-span-2 sm:col-span-1" 
                disabled = {!editable}
                value={data.title}
                name="title"
                onChange={onChangeInput}
                
                />
            
                <DropdownTypes disabled={!editable} data={data} setData={setData} label="Document Type" className='cursor-pointer col-span-1 sm:col-span-1 '/>
                
                <InputTemp label ={editable?"Message":"Message from Sender"} placeholder="E.g Signed" span="col-span-3 sm:col-span-1"
                disabled = {!editable}
                value={data.message}
                name="message"
                onChange={onChangeInput}
                />
              {editable?
              
              <DropdownReceive
              label="Receiver"
              className='cursor-pointer col-span-3 sm:col-span-1 '
              data={data}
              setData={setData}
              options={JSON.parse(localStorage.getItem("offices")||"")}
              />:
              <InputTemp label = "Remarks" placeholder="E.g Signed" span="col-span-3 sm:col-span-1"
                value={data.remarks}
                name="remarks"
                onChange={onChangeInput}
                />
            
            }
              
                
               
                
                
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-3 sm:col-span-1">
                    {editable ? "Save Edit" : "Received"}
                </Button>
                
            </form>
            
        </div>
    </div>
    </>
    
  )
}

export default Form