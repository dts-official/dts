import searchIcon from "../../../assets/icons/search.png";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "./../../../plugin/axios";
import AuditTable from "./table";



const UserAudit = () => {
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


  const [data, setData] = useState([]);

  // const fetchAudits = async () => {
  //   try {
  //     const documentsResponse = await axios.get('document/audit-trail', {
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem('keys')}`
  //       }
  //     });
  
  //     const gatePassResponse = await axios.get('gpass/audit-trail', {
  //       headers: {
  //         Authorization: `Token ${localStorage.getItem('keys')}`
  //       }
  //     });
  
  //     // Add a new property to each object in gatePassResponse.data
  //     const gatePassDataWithNewProperty = gatePassResponse.data.map((item:any) => ({
  //       ...item,
  //       type: 'Gate Pass',  
  //     }));

  
  //     // Concatenate the results of the two API calls
  //     const allData:any = [...documentsResponse.data, ...gatePassDataWithNewProperty];
  
  //     // Update the state with the combined data
  //     setData(allData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchAudits = async () => {
    try {
      const response = await axios.get('audits/by_office', {
        headers: {
          Authorization: `Token ${localStorage.getItem('keys')}`
        }
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  // Call fetchAudits when the component mounts
  useEffect(() => {
    fetchAudits();
  }, []);
  


  return (
      <div
        className=" h-full w-full flex  items-center justify-center"

      >
        <div className=" w-[90%] h-[80%] sm:h-[95%] sm:w-[90%] overflow-hidden shadow-lg rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5 ">
          <div className=" sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between">
            <div className="div1">
              <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight">
                {" "}
                Audit Trail{" "}
              </h1> 
              <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight ">
                {" "}
                All Document Types
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
            <AuditTable data={data} search={search} fetchAudits={fetchAudits} handleSearch={handleSearch} />
          </div>
        </div>
      </div>
  );
};

export default UserAudit;
