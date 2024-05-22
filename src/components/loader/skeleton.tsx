const Skeleton = () => {
  return (
    <div className='  w-full h-full bg-blue2 flex items-center justify-center'>
        <div className=" w-[80%] h-[80%] animate-pulse bg-slate-400 rounded-md drop-shadow-glow grid items-center justify-center grid-cols-6 gap-5 p-5 grid-rows-6 ">
                <div className=" bg-slate-300 col-span-6 row-span-3 w-full h-full rounded-md"></div>
                <div className=" bg-slate-300 col-span-6 row-span-1 w-full h-full rounded-md"></div>
                <div className=" bg-slate-300 col-span-4 w-full h-full rounded-md"></div>
                <div className=" bg-slate-300 col-span-2 w-full h-full rounded-md"></div>
                <div className=" bg-slate-300 col-span-2 w-full h-full rounded-md"></div>
                <div className=" bg-slate-300 col-span-4 w-full h-full rounded-md"></div>
        </div>
    </div>


    
  );
};

export default Skeleton;
