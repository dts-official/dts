import Document from "./../../../assets/logo/document.png";
import Gpass from "./../../../assets/logo/gpass.png";
import Inventory from "./../../../assets/logo/inventory.png";
import Pmo from "./../../../assets/logo/pmo.png";
import Elgu from "./../../../assets/logo/elgu.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
 
  return (
    <div className=" h-full w-full  flex items-center justify-center gap-4 flex-wrap overflow-hidden">
      <div className=" animate__animated animate__fadeInUp  w-[1200px] flex flex-wrap justify-center gap-8 sm:gap-2 md:gap-4   ">
        <Link
          to="/dts/home/document/"
          className="   sm:h-20   object-contain px-5 py-3 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between"
          onClick={()=>{
            localStorage.setItem("nav","1")
        }}
        >
          <img
            alt="Document"
            src={Document}
            className="  object-contain h-full"
          />
        </Link>

        <Link
          to="/dts/home/gpass/"
          onClick={()=>{
            localStorage.setItem("nav","2")
        }}
          className="   sm:h-20   object-contain px-5 py-3 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between"
        >
          <img
          alt="Gpass"
          src={Gpass}
          className="   object-contain h-full"
          />
        </Link>
        
        <img
          alt="Inventory "
          src={Inventory}
          className="   sm:h-20   object-contain px-5 py-3 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between"
        />
        <div className="  sm:min-w-[150px]   sm:w-[40%] sm:h-24 sm:pb-8   px-5 py-3 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between">
          <img alt="Pmo" src={Pmo} className="  h-full object-contain " />
          <p className=" text-sm font-bold text-blue">Task</p>
        </div>

        <div className="    sm:w-[40%] sm:min-w-[150px] sm:h-24 sm:pb-8  px-5 py-3 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between">
          <img alt="Elgu" src={Elgu} className="     h-full object-contain" />
          <p className=" text-sm font-bold text-blue">Task</p>
        </div>

        <a href="https://e.gov.ph/" target="_blank">
          <img
            alt="eGov"
            src="https://e.gov.ph/_next/static/media/logo.e3652a48.svg"
            className=" sm:min-w-[308px]  sm:w-[80%]  sm:h-20  object-contain w-[500px] px-5 py-6 shadow-lg border-border border rounded-md cursor-pointer  flex flex-col items-center gap-1  hover:scale-[1.05] transition-all duration-400 justify-between"
          />
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
