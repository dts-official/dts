import{r as t}from"./index-07a75f65.js";const c=({value:e})=>{const[r,u]=t.useState(e);return t.useEffect(()=>{const o=setTimeout(()=>{u(e)},1e3);return()=>clearTimeout(o)},[e]),r};export{c as u};
