import searchIcon from "../../../assets/icons/search.png";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "./../../../plugin/axios";
import AuditTable from "./table";



const Audit = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const s = searchParams.get("search");

  const [search, setSearch] = useState<any>(s);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);

    window.history.pushState(
      null,
      "",
      `/dts/admin/user?search=${e.target.value}`
    );
  };


  const [data, setdata] = useState([]);

  // Get all admin audit trails
  const Audits = () => {
    Promise.all([
      axios.get('audits/admin_all_audits', {
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      }),
      axios.get('audits/admin_all_office_audits', {
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      })
    ]).then(responses => {
      // responses is an array of responses from all the axios.get calls
      const data1 = responses[0].data;
      const data2 = responses[1].data;
  
      // Combine data1 and data2 in the way you need. For example:
      const combinedData:any = [...data1, ...data2];
  
      combinedData.forEach((item: any) => {
        console.log(item);
      });
  
      setdata(combinedData);
    }).catch(error => {
      console.log(error);
    });
  }
  

  useEffect(()=>{
    Audits()
  },[])


  return (
    <div className="  w-full h-[200vh] bg-blue3 flex flex-col  items-center ">
      <div
        className=" h-[100vh] w-full flex  items-center justify-center"

      >
        <div className=" w-[90%] h-[80%] sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5 ">
          <div className=" sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between">
            <div className="div1">
              <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight">
                {" "}
                Audit Trail{" "}
              </h1> 
              <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight ">
                {" "}
                History logs
              </p>
            </div>

            <div className="  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  ">


              <div className="relative px-3 py-1 border-border border  flex items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[200px] sm:max-w-full">
                <input
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="outline-none w-full bg-bgW text-xs pl-7 text-gray-900 py-1 "
                  type="search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none mr-7px-4">
                  <img src={searchIcon} alt="Search" className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* TABLE */}
          </div>
          <div className="flex-col max-h-full h-full overflow-hidden ">
            <AuditTable data={data} search={search} handleSearch={handleSearch} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Audit;
