import{u as m,b as d,r as o,j as e}from"./index-8ec54245.js";import"./axios-7d4ad366.js";import{L as u}from"./DICT-Banner-Logo-19625be2.js";import{b as x,A as p}from"./Alert-4e293fd4.js";import{a as g}from"./axios-82afda87.js";const j=()=>{const r=m(),i=d(),[a,c]=o.useState(!1),[t,s]=o.useState({load:!1,type:"",title:"",message:""});return o.useEffect(()=>{console.log(i)},[]),e.jsxs("div",{className:"w-screen h-screen",children:[e.jsx("img",{className:" absolute z-10 w-full h-full object-cover ",src:x,alt:"DICT_bg"}),e.jsx("div",{className:" flex z-20 absolute h-full bg-[#163961] bg-opacity-80 sm:h-full w-full items-center justify-center ",children:e.jsxs("div",{className:"text-gray-100  w-[60%] flex items-center flex-col gap-3 sm:w-[90%] ",children:[e.jsx("img",{src:u,alt:""}),e.jsx("hr",{className:" border-b-[.4px] border-[#e8e8e8] w-[40%] my-4 min-w-[500px] sm:min-w-[200px] sm:my-2"}),e.jsx("p",{className:"text-[60px] font-semibold sm:text-[40px] text-center ",children:a?"Successfully Activated ":"You're Almost There!"}),e.jsx("p",{className:"text-[18px] text-center sm:text-[16px]   ",children:a?" Sign in now ":"Just one more step to get started"}),e.jsx("button",{style:{display:a?" none":"flex"},className:"px-10 py-3 text-textW bg-yellow cursor-pointer hover:bg-yellow/70  transition-all duration-200 active:scale-95 text-[18px] mt-9 rounded-full ",onClick:()=>{s({load:!0,type:"warning",title:"Loading",message:" Loading request please wait..."}),g.post("users/activation/",i).then(l=>{console.table(l),s({load:!0,type:"success",title:"Account activated",message:"Great! Your account is succesfully activated"}),c(!0)}).catch(l=>{try{s({load:!0,type:"error",title:"Activation Failed",message:JSON.parse(l.request.response).uid[0]})}catch{}try{s({load:!0,type:"error",title:"Activation Failed",message:JSON.parse(l.request.response).detail})}catch{}}),setTimeout(()=>{s({load:!1,type:"",title:"",message:""})},4e3)},children:t.load?"Activating...":"Activate Account"}),e.jsx("div",{className:t.load?"flex":"hidden",children:e.jsx(p,{variant:t.type,title:t.title,description:t.message})}),e.jsx("button",{className:"px-10 py-3 text-lg font-semibold bg-gray-800 rounded-lg active:bg-opacity-75 sm:text-lg hover:bg-opacity-90 mt-9 ",style:{display:a?"flex ":"none"},onClick:()=>{r("/dts/login")},children:"Go Sign In"})]})})]})};export{j as default};
