
import profile from '../../../../assets/images/profileSkeleton.png'
const ProfileLoader = () => {


    return (
        <div className=" grid grid-cols-6 w-full h-full justify-center items-center bg-adminBG p-16">
            
        {/* left side */}
        <div className=" col-span-4 w-full h-full pr-32 ">

            <div className=" h-[40px] w-[250px] bg-slate-400 rounded-md animate-pulse mb-5"></div>

            {/* left top */}
            <div className=" flex flex-row h-[200px] w-full justify-between items-center pl-4">

                {/* admin name, email, profile pic */}
                <div className=" flex flex-row items-center w-[440px] h-full">

                    <img className=' animate-pulse ' src={profile} alt='profileSkeleton'/>

                    {/* <div className=" w-[140px] h-[140px]">
                        <div className=" w-full h-full rounded-full bg-slate-400 "></div>
                    </div>
                    <div className="flex flex-col w-[320px] h-[90px] lg:h-[80px] bg-slate-400 rounded-xl p-4 pl-10 translate-x-[-30px] ">

                    </div> */}
                </div>

                {/* admin password */}
                <div className=" flex flex-col w-[320px] h-[90px] lg:h-[80px] bg-slate-400 rounded-xl p-4 pl-8 mt-2 animate-pulse">

                </div>
            </div>


            {/* General Information */}
            <div className=" flex flex-col w-full h-[500px] mt-10 pl-10 ">

                <div className=" h-[45px] w-[250px] bg-slate-400 rounded-md animate-pulse mb-5"></div>
                {/* container */}
                <div className=" flex w-full h-full bg-slate-400 rounded-md animate-pulse  ">


                </div>

            </div>
            
        </div>




        {/* right side */}
        <div className=" col-span-2 flex flex-col justify-between w-full h-full px-2 bg-slate-400 rounded-xl animate-pulse">

            <div className=" flex flex-col w-full h-[90%] p-5 pb-12">

                <div className=" rounded-md w-[100px] h-[40px] mb-4 "></div>

            </div>
            
            <div className="flex items-center h-[60px] w-full ">  

            </div>

            
        </div>

    </div>
    )
  }
  
  export default ProfileLoader