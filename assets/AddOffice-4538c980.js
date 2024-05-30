import{r,j as e,u as p}from"./index-22e87fe1.js";import{I as i}from"./Input-266237e7.js";import"./axios-7d4ad366.js";import{S as f,a as u,b as x,c as h,d as b}from"./select-380a8f38.js";import{S as v}from"./sweetalert2.all-4f4a2599.js";import{a as j}from"./axios-82afda87.js";import{L as R}from"./loader-2-d5c2ba97.js";import"./chevron-down-0a11d77c.js";const y=({className:l,label:c,options:o,setData:a,value:t})=>{const[,n]=r.useState(""),m=s=>{const d=o.find(g=>g.name===s);d&&(a(d.name),console.log(d),n(s))};return e.jsxs("div",{className:l+"w-full flex flex-col gap-1 text-xs",children:[e.jsx("p",{className:"  mb-1 truncate",children:c}),e.jsxs(f,{required:!0,value:t,onValueChange:m,children:[e.jsx(u,{className:"  w-full h-[40px] outline-0 border border-blue/50 shadow-inner rounded-md pl-4",children:e.jsx(x,{placeholder:"Select Region..."})}),e.jsx(h,{children:o.map(s=>e.jsx(b,{value:s.name,children:s.name}))})]})]})},V=()=>{const l=p(),[c,o]=r.useState(""),[a,t]=r.useState({name:"",officeMail:"",street:"",city:"",province:"",region:""});return r.useEffect(()=>{console.table(a)},[a]),e.jsx("div",{className:"  w-full h-[100vh] bg-blue3 flex justify-center items-center ",children:e.jsxs("div",{className:" w-[90%]  sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5",children:[e.jsxs("div",{className:" sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between",children:[e.jsxs("div",{className:"div1",children:[e.jsx("h1",{className:"text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight",children:" Register Office"}),e.jsx("p",{className:"text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight ",children:" Create New Office"})]}),e.jsx("div",{className:"  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  ",children:e.jsx("button",{className:`\r
                    rounded-[5px] truncate border-2 border-red-600 hover:bg-bgG/10 transition-all duration-200 bg-red-600/20  text-red-600 px-5 py-1 font-medium text-xs\r
                `,onClick:()=>{l("/dts/admin/offices")},children:"Cancel"})})]}),e.jsxs("form",{onSubmit:n=>{n.preventDefault(),o("spin");try{j.post("office/all/",a,{headers:{Authorization:`Token ${localStorage.getItem("keys")}`}}).then(()=>{setTimeout(()=>{v.fire({icon:"success",title:"Succesfully created a new office",showConfirmButton:!1,timer:1500})},1e3),setTimeout(()=>{t({name:"",officeMail:"",street:"",city:"",province:"",region:""}),l("/dts/admin/offices")},2e3),console.log(" Submitted")})}catch(m){console.error(m)}},className:" grid grid-cols-3 gap-5 sm:gap-2 items-end",children:[e.jsx(i,{label:"Bureau",placeholder:"e.g Cyber Sec.",span:" col-span-1 sm:col-span-3",value:a.name,onChange:n=>t({...a,name:n.target.value})}),e.jsx(i,{type:"email",label:"Office Email",placeholder:"antonioluna@gmail.com",span:" col-span-1 sm:col-span-3 md:col-span-3",value:a.officeMail,onChange:n=>t({...a,officeMail:n.target.value})}),e.jsx(i,{label:"Street/Barangay",placeholder:"e.g Rizal st.",span:" col-span-1 sm:col-span-3",value:a.street,onChange:n=>t({...a,street:n.target.value})}),e.jsx(i,{label:"City",placeholder:"e.g Cagayan de Oro City",span:" col-span-1 sm:col-span-3",value:a.city,onChange:n=>t({...a,city:n.target.value})}),e.jsx(i,{label:"Province",placeholder:"e.g Misamis Oriental",span:" col-span-1 sm:col-span-3",value:a.province,onChange:n=>t({...a,province:n.target.value})}),e.jsx(y,{label:"Select Region",className:"cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 ",setData:n=>t({...a,region:n}),value:a.region,options:[{id:1,name:"Region I - Ilocos Region"},{id:2,name:"Region II - Cagayan Valley"},{id:3,name:"Region III - Central Luzon"},{id:4,name:"Region IV-A - CALABARZON"},{id:5,name:"Region IV-B - MIMAROPA"},{id:6,name:"Region V - Bicol Region"},{id:7,name:"Region VI - Western Visayas"},{id:8,name:"Region VII - Central Visayas"},{id:9,name:"Region VIII - Eastern Visayas"},{id:10,name:"Region IX - Zamboanga Peninsula"},{id:11,name:"Region X - Northern Mindanao"},{id:12,name:"Region XI - Davao Region"},{id:13,name:"Region XII - SOCCSKSARGEN"},{id:14,name:"Region XIII - Caraga"},{id:15,name:"National Capital Region (NCR)"},{id:16,name:"Cordillera Administrative Region (CAR)"},{id:17,name:"Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)"}]}),e.jsx("div",{className:"flex flex-col w-full col-span-3 ",children:c?e.jsxs("button",{className:" pointer-events-none text-textW bg-bgG hover:bg-bgG/10  transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 ",type:"submit",children:[" Loading ",e.jsx(R,{className:" animate-spin"})," "]}):e.jsx("button",{type:"submit",className:`  w-full rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG mt-6 text-textG px-5 py-1 font-medium text-md\r
                `,children:" Add Office"})})]}),e.jsx("div",{className:" flex w-[50%] self-center justify-center items-center bg-white rounded-lg"})]})})};export{V as default};