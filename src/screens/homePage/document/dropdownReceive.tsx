
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const DropdownReceive = ({className,label,disabled,options,data,setData}:any) => {



  const handleChange = (value: string) => {
    const selected = options.find((e:any) => e.name === value);
    if (selected) {
      setData({...data, to: selected.officeID});
      
      console.log(selected)
   }
  };



  return (
    <div className={className + "w-full flex flex-col gap-1"}>
        <p className=" text-xs">{label}</p>

        <Select required disabled={disabled}  defaultValue={data.to?options.find((e:any) => e.officeID == data.to).name:""} onValueChange={handleChange}  >
            <SelectTrigger  className="  border border-blue/50 px-4 py-2 flex h-10 w-full rounded-md  bg-background text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50">
                <SelectValue placeholder="Select Office..." />
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

export default DropdownReceive;
