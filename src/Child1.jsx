import React from 'react'

const Child1 = ({count , setCount}) => {
  return (
    <div className='text-2xl bg-red-500 p-5 m-5 '> 
    Child 1
    <p>the value of count inside child : {count}</p>
    
  <button className="bg-slate-200 p-2 m-4 active:bg-slate-600 active:shadow-inner" onClick={()=>{setCount(count-1);}}>dec count</button>
  <button className="bg-slate-200 p-2 m-4 active:bg-slate-600 active:shadow-inner" onClick={()=>{setCount(count+1);}}>inc count</button>
    
    </div>
  )
}

export default Child1