
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState, useEffect } from "react";



const Dropdown2 = ({className,label,options, setData, value }:any) => {
  const [, setSelectedOption] = useState('');

  // get the id equivalent to the name of the office and store it in a variable
  const handleChange = (value: string) => {
    const selected = options.find((e:any) => e.name === value);
    if (selected) {
      setData(selected.id);
      console.log("selected: ",selected);
      setSelectedOption(value);
    }
  };

  // Set the initial value of the dropdown to the name equivalent to the given id
  useEffect(() => {
    const selected = options.find((e:any) => e.id === value);
    if (selected) {
      setSelectedOption(selected.name);
    }
  }, [options, value]);

  return (
    <div className={className + "w-full flex flex-col gap-1 text-xs"}>
        <p className="  mb-1 truncate">{label}</p>

        <Select required value={value}  onValueChange={handleChange}  >
            <SelectTrigger  className="  w-full h-[40px] outline-0 border border-blue/50 shadow-inner rounded-md pl-4">
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

export default Dropdown2;
