import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width ,start,para,hover}) {
    const hoverclass=hover?" hover:bg-violet-600":""
  return (
    <div className={`${width} text-white flex flex-col hover:${hoverclass} justify-between bg-zinc-800 min-h-96 rounded-xl p-5`}>
      <div className="w-full"> 
        <div className="w-full flex items-center justify-between">
          <h3>heading </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <div className="down w-full ">
        {
            start  &&(
                <>
                <h1 className="text-6xl font-semibold tracking-tight leading-none" >Start a project</h1>
        <button className="rounded-full py-2 px-3 border-[1px] border-zinc-50 mt-5">Contact Us</button>
       
                
                </>
            )
        }
         
        {para && ( 
            <p className="text-sm text-white font-regular">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        )}
      </div>
    </div>
  );
}

export default Card;
