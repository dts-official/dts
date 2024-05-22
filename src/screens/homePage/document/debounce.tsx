import { useEffect, useState } from 'react'

const useDebounce = ({value}:any) =>{
    const [queryValue,setQueryValue] = useState(value)
    useEffect(()=>{
      const timeoutId = setTimeout(()=>{
        setQueryValue(value)
      },1000)
      
      return ()=>clearTimeout(timeoutId)
    },[value])
  
    return queryValue
  }

export default useDebounce
//this code use for the delay in query
