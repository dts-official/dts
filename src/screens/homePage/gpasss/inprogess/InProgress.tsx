
import { useEffect, useState } from 'react';


import axios from '../../../../plugin/axios';
import searchIcon from "./../../../../assets/icons/search.png";
import MyTable from './Table';
import useDebounce from '../debounce';



 
 const InProgress = () => {

  const [data, setData] = useState<any[]>([]);


   useEffect(  ()=>{
    axios.get(`gpass/by_office/`,{
      headers: {
        Authorization: `Token ${localStorage.getItem("keys")}`,
      }, 
      
    }).then((e:any)=>{
      setData(e.data ? e.data : []);
    }).catch((e:any)=>{
      console.log(e.data)
    })

    // const interval = setInterval(() => {
    //   axios.get(`document/user/${JSON.parse(localStorage.getItem("user")||"").id}`,{
    //     headers: {
    //       Authorization: `Token ${localStorage.getItem("keys")}`,
    //     }, 
    //   }).then( async (e:any)=>{
        
    //     localStorage.setItem('data',JSON.stringify(e.data ))
    //     setData(e.data);
    //     countPendingDocuments(e.data)
    //   }).catch((e:any)=>{
    //     console.log(e.data)
    //   })
    // }, 5000); // 2000 milliseconds = 2 seconds
  
    // Clear the interval when the component is unmounted
    // return () => clearInterval(interval);

   },[])

  
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  const debouncedSearchTerm = useDebounce({ value: search });


  useEffect(() => {

      setQuery(search);
     
    
}, [debouncedSearchTerm]);


 
  return (
    
      <div
        className= "h-[100vh] w-full flex  items-start justify-center"
        
      >

        <div className=" relative w-[90%] h-[67%] mt-5  sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-md flex flex-col p-10 sm:p-5 gap-10 sm:gap-5 pb-10 ">
          <div className=" sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between">
            <div>
              <h1 className="text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight">
                On Process
              </h1>
              <p className="text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight ">
                {" "}
                All Gate Pass Pending
              </p>
            </div>

            <div className="  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  ">
            

              <div className="relative px-3 py-1 border-border border  flex items-center w-[80%] sm:w-full bg-bgW rounded-md m-0  max-w-[200px] sm:max-w-full">
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
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
            <MyTable search={query}  name={JSON.parse(localStorage.getItem("user") ||"").id}  data={data?data.filter((item:any) => {
              if (item.status === 'Pending') {
                return item
              }
              return false;
            }):""} />
          </div>
        </div>

        
      </div>

    
      
  )
}

export default InProgress