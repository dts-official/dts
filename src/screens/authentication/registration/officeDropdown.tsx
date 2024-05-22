
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useState } from "react";
  
  
  
  const Dropdown1 = ({className,label,options,data, setUser}:any) => {
    const [, setSelectedOption] = useState('');
  
    // get the id equivalent to the name of the office and store it in a variable
    const handleChange = (value: string) => {
      const selected = options.find((e:any) => e.name === value);
      if (selected) {
        setUser({...data, office: selected.officeID});
        console.log(selected)
        setSelectedOption(value);
     }
    };
  
  
  
    return (
      <div className={className + "w-1/2 flex flex-col gap-1"}>
          <p className=" text-textW mb-1 truncate">{label}</p>
  
          <Select required  onValueChange={handleChange}  >
              <SelectTrigger  className="  text-start w-full h-[40px] text-textW bg-blue2 border-[1px] outline-0 focus:border-[2px] focus:border-textW shadow-inner rounded-[5px] pl-4">
                  <SelectValue placeholder="Select Office..." />
              </SelectTrigger>
              <SelectContent >
                {options.map((e:any)=>(
                  <SelectItem value={e.name}>{e.name}</SelectItem>
                ))}
              </SelectContent>
              </Select>
      </div>
    );
  };
  
  export default Dropdown1;
  