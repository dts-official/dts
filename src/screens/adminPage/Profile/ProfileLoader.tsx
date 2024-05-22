import genInfo from './data.json'
const ProfileLoader = () => {


    return (
        <div className="  w-full h-full justify-center items-center bg-adminBG md:p-8 p-16  ">
            
        {/* top side */}
        <div className="  w-full h-full ">

            <div className=" w-[200px] h-[40px] bg-slate-400 animate-pulse rounded-sm mb-4"></div>

            {/* left top */}
            <div className=" flex flex-row min-h-[200px] w-full lg:justify-center justify-between items-center lg:pl-0 pl-5 lg:flex-col ">

                {/* admin name, email, profile pic */}
                <div className=" flex flex-row items-center sm:w-full md:w-[80%] lg:w-[70%] w-full h-full lg:flex-col sm:px-0 lg:px-10 ">

                    {/* profile */}
                    <div className=" z-20 flex justify-center items-center sm:w-[160px] sm:h-[160px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] w-[170px] h-[170px] bg-slate-400 rounded-full animate-pulse">
                    </div>

                    <div className=" z-10 flex flex-col  lg:justify-center lg:items-center  md:w-[100%] w-[400px] h-[90px] lg:min-w-[300px] lg:w-[100%] lg:h-[80px] bg-slate-400 animate-pulse rounded-xl p-4 lg:pl-0 pl-10 translate-x-[-30px] sm:translate-y-[-20px] md:translate-y-[-10px] lg:translate-y-[-20px] lg:translate-x-[0px] ">
                    </div>

                    {/* admin password */}
                    <div className=" flex flex-col lg:justify-center lg:items-center  md:w-[100%]  w-[400px] h-[90px] lg:min-w-[300px] lg:w-[100%] lg:h-[80px] bg-slate-400 animate-pulse rounded-xl p-4 lg:pl-0 ">
                    </div>
                </div>


            </div>


            {/* General Information */}
            <div className=" flex flex-col w-full mt-4 ">

                <div className=" w-[200px] h-[40px] bg-slate-400 animate-pulse rounded-sm mb-4"></div>

                {/* container */}
                <div className=" grid lg:grid-col-span-6 grid-cols-4 w-full h-full gap-4">

                    {genInfo.map((_e, key) => {
                        return (
                            <div className="lg:col-span-2 col-span-1 flex flex-col justify-center h-[70px] w-full pl-4 mt-3 mr-2 bg-slate-400 rounded-xl animate-pulse"
                            key={key}>
                            </div>
                        );
                    })}

                </div>


            </div>
            
        </div>

    </div>
    )
  }
  
  export default ProfileLoader