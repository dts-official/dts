import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import InputTemp from "@/components/input/Input";
import axios from "../../../../plugin/axios";
import { useNavigate } from "react-router-dom";
import DropdownReceive from "../dropdownReceive";
import DropdownTypes from "../dropdownTypes2";
import Swal from 'sweetalert2'

function Form() {


    const [data,setData]= useState(JSON.parse(localStorage.getItem("selected2") ||""))

    const [onSub,setOnSub] = useState(false)

    useEffect(()=>{

      console.log("2323",data)

    },[data])

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

          console.log(data)
          axios.put(`gpass/${data.id}`,data,{
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
              "remarks": "",
              "reason":""
          })

          setTimeout(()=>{
                navigate('/dts/home/gpass/process')
          },1500)
          
          setOnSub(!onSub)
          }).catch((e:any)=>{
            console.log(e.data)
          })
          
        }else{
          axios.patch(`gpass/sign_document/${data.id}`,{
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
              "remarks": "",
              "reason":""
          })
          setTimeout(()=>{
            navigate('/dts/home/gpass/completed')
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
                  navigate("/dts/home/gpass/process")
                }}  className=" cursor-pointer flex items-center justify-center bg-[#FF9292] text-xs rounded-[5px] border-dashed border text-blue border-blue h-[20px] w-[80px] ">
                        Back
                </div>
            </div>
            <form className=" w-full border border-gray-500/20 rounded-[5px] px-5 py-8  grid grid-cols-4 gap-3  sm:grid-cols-1    " onSubmit={handleSubmit}>
               

            <DropdownTypes onSubmit={onSub} disabled = {!editable} name="reason"  data={data} setData={setData} label="Select Reason" className='cursor-pointer col-span-4 sm:col-span-1 '/>

                

<InputTemp label = "Time of Departure" placeholder="E.g Officer1" span="col-span-2 sm:col-span-1"
disabled = {!editable}
type="datetime-local"
value={data.departure}
name="departure"
onChange={onChangeInput}
/>
<InputTemp label = "Time of Returns" placeholder="E.g Officer1" span=" col-span-2 sm:col-span-1"
disabled = {!editable}
type="datetime-local"
value={data.returns}
name="returns"
onChange={onChangeInput}
/>


<InputTemp label = "Venue" placeholder="E.g N Hotel, Cagayan de Oro Mis. Or" span="col-span-4 sm:col-span-1"
disabled = {!editable}
value={data.venue}
name="venue"
onChange={onChangeInput}

/>

               
               
               
               
                <InputTemp label = "Name of the Requestor" placeholder="E.g Taylor Sheeesh" span="col-span-2 sm:col-span-1"
                disabled = {!editable}
                value={data.requestor}
                name="requestor"
                onChange={onChangeInput}
                
                />
              
            
             
              {editable?
              
              <DropdownReceive
label="Approved by"
className='cursor-pointer col-span-2 sm:col-span-1 '
data={data}
setData={setData}
options={JSON.parse(localStorage.getItem("offices") ||"")}
/>:
              <InputTemp label = "Remarks" placeholder="E.g Signed" span="col-span-2 sm:col-span-1"
                value={data.remarks}
                name="remarks"
                onChange={onChangeInput}
                />
            
            }
              
                
               
                
                
                <Button  variant="outline" className=" bg-[#038500] rounded-[5px] text-white col-span-4 sm:col-span-1">
                    {editable ? "Save Edit" : "Received"}
                </Button>
                
            </form>
            
        </div>
    </div>
    </>
    
  )
}

export default Form