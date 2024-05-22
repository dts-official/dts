
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import InputTemp from "@/components/input/Input";
import { useState } from "react";



const DropdownTypes = ({className,label,data,disabled,setData}:any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [otherOption, setOtherOption] = useState('');

  const [Options]:any = useState(["Letter","Accomplishment Reports","Daily Time Record","Liquidation Reports","Disbursement Voucher","Others"])


  const handleChange = (value: string) => {
    setSelectedOption(value)
    value == "Others"?"": setData({...data, type: value})
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setData({...data, type: event.target.value})
    setOtherOption(event.target.value)
  };

  return (
    <div className={className + " w-full flex flex-col gap-1"}>
        <p className=" text-xs">{label}</p>

        <Select disabled={disabled} required defaultValue={data.type?data.type:""}  onValueChange={handleChange} >
            <SelectTrigger  className="  border border-blue/50 px-4 py-2 flex h-10 w-full rounded-md  bg-background text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50">
                <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent  >
                {Options.map((e:any,key:any)=>(
                    <SelectItem key={key} value={e}>{e}</SelectItem>
                ))}
            </SelectContent>
            </Select>

      {selectedOption === 'Others' && (
        <div className="mt-4">
          <InputTemp type="text" label="Please specify" required placeholder="e.g Birthday Gift" value={otherOption} onChange={handleOtherChange} className="w-full p-2 border rounded" />
        </div>
      )}
    </div>
  );
};

export default DropdownTypes;
