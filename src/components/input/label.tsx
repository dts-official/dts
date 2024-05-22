
const LabelTemp = ({ value, label, span }: any) => {
  return (
    <div className={" w-full flex flex-col gap-1 " + span}>
      <p className=" text-xs">{label}</p>
      <h1 className=" pb-4 text-accent-foreground font-semibold pl-2 "  >{value}</h1>
    </div>
  );
};

export default LabelTemp;
