import{j as e,r as f}from"./index-b1c7104b.js";import{S as p,a as m,b as x,c as h,d as b}from"./select-d4b0c31a.js";import{I as S}from"./Input-e75af7b3.js";const N=({className:i,label:a,disabled:r,options:n,data:o,setData:c})=>{const d=t=>{const s=n.find(u=>u.name===t);s&&(c({...o,to:s.officeID}),console.log(s))};return e.jsxs("div",{className:i+"w-full flex flex-col gap-1",children:[e.jsx("p",{className:" text-xs",children:a}),e.jsxs(p,{required:!0,disabled:r,defaultValue:o.to?n.find(t=>t.officeID==o.to).name:"",onValueChange:d,children:[e.jsx(m,{className:"  border border-blue/50 px-4 py-2 flex h-10 w-full rounded-md  bg-background text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50",children:e.jsx(x,{placeholder:"Select Office..."})}),e.jsx(h,{children:n.map((t,s)=>e.jsx(b,{value:t.name,children:t.name},s))})]})]})},C=({className:i,label:a,data:r,disabled:n,setData:o})=>{const[c,d]=f.useState(""),[t,s]=f.useState(""),[u]=f.useState(["Letter","Accomplishment Reports","Daily Time Record","Liquidation Reports","Disbursement Voucher","Others"]),g=l=>{d(l),l=="Others"||o({...r,type:l})},j=l=>{o({...r,type:l.target.value}),s(l.target.value)};return e.jsxs("div",{className:i+" w-full flex flex-col gap-1",children:[e.jsx("p",{className:" text-xs",children:a}),e.jsxs(p,{disabled:n,required:!0,defaultValue:r.type?r.type:"",onValueChange:g,children:[e.jsx(m,{className:"  border border-blue/50 px-4 py-2 flex h-10 w-full rounded-md  bg-background text-sm outline-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50",children:e.jsx(x,{placeholder:"Select..."})}),e.jsx(h,{children:u.map((l,y)=>e.jsx(b,{value:l,children:l},y))})]}),c==="Others"&&e.jsx("div",{className:"mt-4",children:e.jsx(S,{type:"text",label:"Please specify",required:!0,placeholder:"e.g Birthday Gift",value:t,onChange:j,className:"w-full p-2 border rounded"})})]})};export{C as D,N as a};