
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import InputTemp from "@/components/input/Input";
import { useEffect, useState } from "react";



const DropdownTypes = ({label,data,disabled,setData,onSubmit}:any) => {
  const [_selectedOption, setSelectedOption] = useState('');
  const [otherOption, setOtherOption] = useState('');


  useEffect(()=>{
    setData({...data, reason: ""})
    console.log(" riinng")
    console.log(data)
  },[onSubmit])


  const [Options]:any = useState([
    { "type": "Official",
    "options": ["Travel (Please specify)","Seminar/Training/Conference/Meeting","Document Tracking/Pick-ip/Delivery", "Others [1]"]
  },
  { "type": "Personal",
    "options": ["Medication/Physical Check-up(subject to presentation of Doctor’s Certificate)","Medical Attention to Family Member/Relative",
    "Others [2]"]
  }


])


  const handleChange = (value: string) => {
    setSelectedOption(value)
    setData({...data, reason: value})
    setOtherOption("")
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setData({...data, specific: event.target.value})
    setOtherOption(event.target.value)
  };

  return (
    <>
    <div className={ data.reason != ''? " cursor-pointer col-span-2 sm:col-span-1 w-full flex flex-col gap-1": " cursor-pointer col-span-4 sm:col-span-1 w-full flex flex-col gap-1" }>
        <p className=" text-xs">{label}</p>

        <Select disabled={disabled} value={data.reason} required defaultValue={data.reason?data.reason:""}  onValueChange={handleChange} >
            <SelectTrigger  className="  border border-blue/50 px-4 py-2 flex h-10 w-full rounded-md  bg-background text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50">
                <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent  >
              {Options.map((e:any)=>(
                <SelectGroup>
                <SelectLabel>{e.type}</SelectLabel>
                {e.options.map((e:any,key:any)=>(
                          <SelectItem key={key} value={e}>{e}</SelectItem>
                      ))}
              </SelectGroup>
              ))}

            

                
            </SelectContent>
            </Select>
    </div>
    {data.reason != ''  && (
        <div className=" col-span-2">
          <InputTemp type="text" label="Please specify" required placeholder="" value={otherOption} onChange={handleOtherChange} className="w-full p-2 border rounded" />
        </div>
      )}
    </>
  );
};

export default DropdownTypes;
