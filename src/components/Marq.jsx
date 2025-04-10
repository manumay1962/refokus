import React from "react";

function Marq({ imageurls }) {
  return(
   <div className="flex  w-full py-8 whitespace-nowrap overflow-hidden gap-20">
  {imageurls.map((urls,index)=><img  key={index} className="w-[6vw] flex-shrink-0" src={urls}/>)}
  {imageurls.map((urls,index)=><img  key={index} className="w-[6vw] flex-shrink-0" src={urls}/>)}
   </div>
  )
}

export default Marq;
