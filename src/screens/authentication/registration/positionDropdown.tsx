
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useState } from "react";
  
  
  
  const Dropdown2 = ({className,label,options, setUser}:any) => {
    const [, setSelectedOption] = useState('');
  
    // get the selected value
    const handleChange = (value: string) => {
      const selected = options.find((e:any) => e.name === value);
      if (selected) {
        setUser(selected.name);
        setSelectedOption(value);
     }
    };
  
  
  
    return (
      <div className={className + "w-1/2 flex flex-col gap-1 text-white"}>
          <p className=" mb-1 truncate">{label}</p>
  
          <Select required  onValueChange={handleChange}  >
              <SelectTrigger  className=" text-start w-full h-[40px] bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4">
                  <SelectValue placeholder="Select Position..." />
              </SelectTrigger>
              <SelectContent >
                {options.map((e:any,key:any)=>(
                  <SelectItem key={key} value={e.name}>{e.name}</SelectItem>
                ))}
              </SelectContent>
              </Select>
      </div>
    );
  };
  
  export default Dropdown2;
  