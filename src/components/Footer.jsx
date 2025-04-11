import React from "react";

function Footer() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl py-8 flex mx-auto text-white gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-medium  leading-none tracking-tight">refokus.</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
        <div className="  basis-1/3 ">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
         {   ["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=><a key={index} className="block capitalize text-zinc-600 mt-2">{item}</a>)}
        </div>
        <div > <h4 className="mb-8 text-zinc-500 capitalize">Sitemaps</h4>
        {   ["Home", "Work", "Careers", "Contact"].map((item,index)=><a key={index} className="block capitalize text-zinc-600 mt-2">{item}</a>)}</div>
        <div className="basis-1/2 ml-10 text-zinc-500">
            <p>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
            <img className="bg-blue-600 py-1 px-6 mt-10" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
