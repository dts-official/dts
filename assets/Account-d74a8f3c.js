import{r as i,j as e}from"./index-8ec54245.js";import"./axios-7d4ad366.js";import{S as n}from"./sweetalert2.all-19467e50.js";import{L as x}from"./loader-2-06a6ae74.js";import{a as p}from"./axios-82afda87.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJySURBVHgBvVZRchJBEH0zS9iVSilHWEy0yq+QEwgnEE6Q+KcmKeAEIScACsFPwglCThA8Afz5IYT1BmtZFgvFTttDrLhVAjvBMv2z7DDdb+Z19+sFHsGEyaZBLZ1+ujM9lpY4AMEFyA9JXP+YO73Diu//E8jXppNLJHBEIRUgRJqXPEHwSDLQEozhgEul0H1xFvSNQfSp005Q4sDlu8DkE2RXKepFA01aO1kiqwyJ178BPWFRPfNu1ogFuW09GXDgLDv2FcmGtZvsZ95upmTUco4t0BuCKHDI4fe5nV9Lo95823Jo/NEuYwu792851ei6jL5YAkdCoL93OqtjC9s/CS61v+BbRdcT0Rdibpm//rogOl+7iSC7WMB7VQm8VXtI4Rvn0o2uSRjapGWXnu1MJ5bEjZ3EZNw2p9QI5EvNcTmpdUgxVEoVoSkhnOubmfgbgXCvuPqpQtXYP5v39JOraEmdkb/RpkUwpKTtS0uWRs0UpKVKugsZ3DPxN7pJpgKfSF5w4JyU6oorhBuRKpn3q5O/FYi2vdNpfZkPtlCJ4kPK3BhEG8tLrBjGgnAFDZnq3LrNJC0DEDrghvQ2gNA1P1ytvqvcX578HAqEh+sUV8sKN2I2JHSj6ysE0h5oIAVR0TIBQ9MHswRdcS/5zz8EGay7yRJVCm424fMfnckn5xwGNmnbNa0EkNJjqvJ/xVznOG46VSGhQbzZHPlVWqWVwLHRYc3LcT4bMmVXV42FjZNRcywFA3E1KOAiSt+onSpIFXZ0hDhqY2c8U+bySW/upx9XDt39dpnWoRBUjGtKow8J4M/0A/FIZqAQ+PyQwvjv9guwmhLXGDX5NQAAAABJRU5ErkJggg==",j=()=>{const[t,l]=i.useState(!1);function o(){l(!0),p.post("users/reset_password/",{email:JSON.parse(localStorage.getItem("user")||"").email}).then(s=>{n.fire({icon:"success",title:"We Send an Email to Reset you Password",showConfirmButton:!1,timer:2500}),l(!1),console.log(s)}).catch(s=>{console.log(s)})}function c(s,m){const a=m.find(d=>d.officeID===s);return a?a.name:"Office not found"}const r=c(JSON.parse(localStorage.getItem("user")||"").office,JSON.parse(localStorage.getItem("offices")||""));return e.jsx("div",{className:" relative  rounded-[5px] h-screen w-full pb-36 sm:pb-60 sm:pt-60  overflow-y-scroll flex items-center justify-center gap-5    ",children:e.jsxs("div",{className:" relative w-full px-[100px] md:px-10 md:flex-col flex gap-4",children:[e.jsxs("div",{className:" w-[40%] md:w-full gap-10",children:[e.jsxs("div",{className:" flex flex-col gap-4 md:mt-10 ",children:[e.jsx("p",{className:" font-semibold text-sm",children:"Account Settings"}),e.jsxs("div",{className:" flex relative items-center",children:[e.jsx("div",{className:"  z-10 flex items-center justify-center p-5 text-accent font-bold h-[100px] w-[100px] aspect-square object-contain bg-[#163961] rounded-full uppercase text-3xl",children:JSON.parse(localStorage.getItem("user")||"").position.substring(0,2)}),e.jsxs("div",{className:" ml-[70px]  z-0 absolute flex flex-col min-w-[20px] shadow-md px-4 pl-10 py-2 rounded-md ",children:[e.jsxs("h1",{className:" text-[#2B3674] text-base font-semibold",children:[" ",JSON.parse(localStorage.getItem("user")||"").first_name," ",JSON.parse(localStorage.getItem("user")||"").last_name]}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").email})]})]})]}),e.jsxs("div",{className:" flex flex-col gap-2 mt-4 ",children:[e.jsx("p",{className:" font-semibold text-sm",children:"Login Credentials"}),e.jsxs("div",{className:" flex flex-col gap-5 relative ",children:[e.jsxs("div",{className:"  flex flex-col min-w-[300px] shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Email"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").email})]}),e.jsxs("div",{className:"  flex flex-col min-w-[300px] shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Password"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:"**********"})]}),e.jsxs("div",{className:t?" cursor-pointer self-end flex items-center justify-center px-2 py-1 w-[150px] rounded-sm text-xs font-semibold bg-[#fdfaf3] border border-[#de9508] text-[#de9508] gap-1 pointer-events-none":" cursor-pointer self-end flex items-center justify-center px-2 py-1 w-[150px] rounded-sm text-xs font-semibold bg-[#fdfaf3] border border-[#de9508] text-[#de9508] gap-1",onClick:o,children:[t?e.jsx(x,{className:" animate-spin"}):e.jsx("img",{src:f,className:" h-[20px] object-contain",alt:""}),"Reset Password "]})]})]})]}),e.jsx("div",{className:" w-[60%] md:w-full ",children:e.jsxs("div",{className:" flex flex-col gap-2 ",children:[e.jsx("p",{className:" font-semibold text-sm",children:"User Information"}),e.jsxs("div",{className:"  grid grid-cols-3 sm:grid-cols-2 relative gap-5 ",children:[e.jsxs("div",{className:" row-span-1   col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"First Name"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").first_name})]}),e.jsxs("div",{className:"  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Surname"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").last_name})]}),e.jsxs("div",{className:"  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Email"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").email})]}),e.jsxs("div",{className:"  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Office"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:r})]}),e.jsxs("div",{className:"  col-span-1 flex flex-col  shadow-md px-4  py-2 rounded-md ",children:[e.jsx("h1",{className:" text-[#163961] text-sm font-semibold",children:"Position"}),e.jsx("p",{className:" text-sm text-[#A3AED0]",children:JSON.parse(localStorage.getItem("user")||"").position})]})]})]})})]})})};export{j as default};
