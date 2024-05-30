import{r as o,j as t,u as v}from"./index-07a75f65.js";import{I as f}from"./Input-e114671c.js";import"./axios-7d4ad366.js";import{S as u,a as x,b as g,c as h,d as b}from"./select-c8d0f8de.js";import{S as w}from"./sweetalert2.all-154063ec.js";import{a as S}from"./axios-82afda87.js";import{L as y}from"./loader-2-2420bb09.js";import"./chevron-down-5a69a20b.js";const N=({className:i,label:d,options:l,setData:n,value:s})=>{const[,a]=o.useState(""),c=e=>{const r=l.find(m=>m.name===e);r&&(n(r.name),console.log(r),a(e))};return t.jsxs("div",{className:i+"w-full flex flex-col gap-1 text-xs",children:[t.jsx("p",{className:"  mb-1 truncate",children:d}),t.jsxs(u,{required:!0,value:s,onValueChange:c,children:[t.jsx(x,{className:"  w-full h-[40px] outline-0 border border-blue/50 shadow-inner rounded-md pl-4",children:t.jsx(g,{placeholder:"Select Position..."})}),t.jsx(h,{children:l.map(e=>t.jsx(b,{value:e.name,children:e.name}))})]})]})},O=({className:i,label:d,options:l,setData:n,value:s})=>{const[,a]=o.useState(""),c=e=>{const r=l.find(m=>m.name===e);r&&(n(r.id),console.log("selected: ",r),a(e))};return o.useEffect(()=>{const e=l.find(r=>r.id===s);e&&a(e.name)},[l,s]),t.jsxs("div",{className:i+"w-full flex flex-col gap-1 text-xs",children:[t.jsx("p",{className:"  mb-1 truncate",children:d}),t.jsxs(u,{required:!0,value:s,onValueChange:c,children:[t.jsx(x,{className:"  w-full h-[40px] outline-0 border border-blue/50 shadow-inner rounded-md pl-4",children:t.jsx(g,{placeholder:"Select Office..."})}),t.jsx(h,{children:l.map(e=>t.jsx(b,{value:e.name,children:e.name}))})]})]})},k=()=>{const i=v(),[d,l]=o.useState(""),n=JSON.parse(localStorage.getItem("selectedUser")||""),[s,a]=o.useState({first_name:n.first_name,last_name:n.last_name,email:n.email,position:n.position,office:n.office,acc_lvl:n.acc_lvl,password:""}),c=JSON.parse(localStorage.getItem("offices")||"").find(e=>e.id===s.office);return o.useEffect(()=>{const e={"Regional Director":1,"Provincial Officer":2,"Information Technology Officer I":3,"Information Technology Officer II":3,"Information Technology Officer III":3,"Project Development Officer I":3,"Project Development Officer II":3,"Project Development Officer III":3,"Cyber Security Officer I":3,"Cyber Security Officer II":3,"Cyber Security Officer III":3};e[s.position]&&a({...s,acc_lvl:e[s.position]})},[s.position]),o.useEffect(()=>{console.table(s)},[s]),t.jsx("div",{className:"  w-full h-[100vh] bg-blue3 flex justify-center items-center ",children:t.jsxs("div",{className:" w-[90%]  sm:h-[95%] sm:w-[90%]  overflow-hidden bg-white rounded-md drop-shadow-glow flex flex-col p-10 sm:p-5 gap-10 sm:gap-5",children:[t.jsxs("div",{className:" sm:gap-5 flex flex-row sm:flex-col items-center w-full sm:items-start justify-between",children:[t.jsxs("div",{className:"div1",children:[t.jsx("h1",{className:"text-black font-poppins font-bold  w-[200px] text-lg eading-normal tracking-tight",children:" Edit User "}),t.jsx("p",{className:"text-teal-500 font-poppins text-m text-base font-normal leading-normal tracking-tight ",children:" Update User"})]}),t.jsx("div",{className:"  flex sm:flex-col items-center gap-5 sm:justify-between w-full justify-end  relative sm:gap-5 sm:items-start  ",children:t.jsx("button",{className:`\r
                        rounded-[5px] truncate border-2 border-red-600 hover:bg-bgG/10 transition-all duration-200 bg-red-600/20  text-red-600 px-5 py-1 font-medium text-xs\r
                    `,onClick:()=>{i("/dts/admin/user")},children:"Cancel"})})]}),t.jsxs("form",{onSubmit:e=>{e.preventDefault(),l("spin");let r=JSON.parse(localStorage.getItem("selectedUser")||""),m=r?r.id:null;try{let p=Object.fromEntries(Object.entries(s).filter(([j,I])=>!(j==="password"&&I==="")));S.put("users/update/"+m+"/",p,{headers:{Authorization:`Token ${localStorage.getItem("keys")}`}}).then(()=>{setTimeout(()=>{w.fire({icon:"success",title:"You have successfully updated this user!",showConfirmButton:!1,timer:1500})},1e3),setTimeout(()=>{l(""),a({first_name:"",last_name:"",email:"",position:"",office:"",password:"",acc_lvl:""}),i("/dts/admin/user/")},2e3),console.log("Updated User")})}catch(p){console.error(p)}},className:" grid grid-cols-3 gap-5 sm:gap-2 items-end",children:[t.jsx(f,{required:!0,label:"First Name",span:" col-span-1 sm:col-span-3 md:col-span-3",value:s.first_name,onChange:e=>a({...s,first_name:e.target.value})}),t.jsx(f,{required:!0,label:"Last Name",span:" col-span-1 sm:col-span-3 md:col-span-3",value:s.last_name,onChange:e=>a({...s,last_name:e.target.value})}),t.jsx(f,{required:!0,type:"email",label:"Email",span:" col-span-1 sm:col-span-3 md:col-span-3",value:s.email,onChange:e=>a({...s,email:e.target.value})}),t.jsx(N,{label:"Position",className:"cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 ",setData:e=>a({...s,position:e}),value:s.position,options:[{id:1,name:"Regional Director"},{id:2,name:"Provincial Officer"},{id:3,name:"Project Development Officer I"},{id:4,name:"Project Development Officer II"},{id:5,name:"Project Development Officer III"},{id:6,name:"Cyber Security Officer I"},{id:7,name:"Cyber Security Officer II"},{id:8,name:"Cyber Security Officer III"}]}),t.jsx(O,{label:"Office Designation",className:"cursor-pointer col-span-1 sm:col-span-3 md:col-span-3 ",setData:e=>a({...s,office:e}),value:c?c.name:"",options:JSON.parse(localStorage.getItem("offices")||"")}),t.jsx(f,{required:!0,type:"password",label:"Password",span:" col-span-1 sm:col-span-3 md:col-span-3",value:s.password,onChange:e=>a({...s,password:e.target.value})}),t.jsx("div",{className:"flex flex-col w-full col-span-3 ",children:d?t.jsxs("button",{className:" pointer-events-none text-textW bg-bgG hover:bg-bgG/10  transition-all  duration-75 cursor-pointer text-[18px] w-full h-[45px] mt-6 rounded-full flex items-center justify-center gap-2 ",type:"submit",children:[" Loading ",t.jsx(y,{className:" animate-spin"})," "]}):t.jsx("button",{type:"submit",className:`  w-full rounded-[5px] truncate border-2 border-textG hover:bg-bgG/10 transition-all duration-200 bg-bgG mt-6 text-textG px-5 py-1 font-medium text-md\r
                    `,children:" Update User"})})]})]})})};export{k as default};