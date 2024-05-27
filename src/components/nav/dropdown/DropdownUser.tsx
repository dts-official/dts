

import { useNavigate} from 'react-router-dom';
import DownAr from './../../../assets/icons/downAr.png'
function Dropdown({setActive,navActive}:any) {

  const navigate = useNavigate();
  const nav = [{
    name: "account",
    to:"/dts/home/account"
  },{
    name: "audit logs",
    to:"/dts/home/audit_trail"
  },{
    name: "logout",
    to:"/dts"
  }
]
  return (
    // added hidden display when screen is slg
    <div className="relative inline-block text-left slg:hidden">
      <div>
        <button type="button" onClick={() => setActive(!navActive)} className={navActive?" transition-all duration-150 inline-flex justify-center w-full  rounded-md  px-4 py-2 border border-border text-sm font-medium text-gray-700 bg-gray-50 focus:outline-none   items-center gap-2": " transition-all duration-150 inline-flex justify-center w-full  rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none   items-center gap-2"}>
        <div className="bg-blue flex items-center justify-center h-5 p-5 w-5 rounded-full  ">
                  <p className=" font-semibold uppercase text-base text-white">{JSON.parse(localStorage.getItem("user")||"").position.substring(0, 2)} </p> 
              </div>
              <p >
                Welcome, {JSON.parse(localStorage.getItem("user")||"").first_name} {JSON.parse(localStorage.getItem("user")||"").last_name}  <img className={!navActive?" inline-flex  rotate-90  ml-2  w-[10px] object-contain  " : " ml-2 w-[10px] object-contain    inline-flex rotate-0 "} src={DownAr}/> 
              </p>
        </button>
      </div>

      {navActive && (
        <div className="origin-top-right absolute w-full right-0 z-20 mt-2  shadow-lg rounded-md overflow-hidden bg-white ring-1 ring-black ring-opacity-5">
          <div  >
            {
              nav.map((e:any,key:any)=>(
                <div
                key={key}
                onClick={(event)=>{
                  event.preventDefault()
                  navigate(e.to)
                  if (e.name == "logout") {
                  localStorage.clear(); // clear localStorage
                  
                  navigate(e.to)
                  }
                  
                  
                }} 
                
                className=" block px-4 py-3 text-sm text-center capitalize  hover:bg-blue2/5  cursor-pointer " >{e.name}</div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown