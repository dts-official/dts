import { Input } from "../ui/input";

const InputTemp = ({ placeholder,disabled, value, label,name, span, type,onChange,required  }: any) => {
  return (
    <div className={" w-full flex flex-col gap-1 " + span}>
      <p className=" text-xs">{label}</p>
      <Input className=" w-full flex justify-between" disabled={disabled} placeholder={placeholder}  name={name} onChange={onChange} type={type} value={value} required={required?false:true} />
    </div>
  );
};

export default InputTemp;
