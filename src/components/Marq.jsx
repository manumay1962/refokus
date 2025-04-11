import React from "react";
import { motion } from "framer-motion";

function Marq({ imageurls,direction }) {
  return (
    <div className="flex  w-full  overflow-hidden">
      <motion.div initial={{x:direction === 'left'? "0" : "-100%"}} animate={{x:direction==='left'?"-100%":"0"}} transition={{ease:"linear",duration:18,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageurls.map((urls, index) => (
          <img key={index} className=" " src={urls} />
        ))}
      </motion.div>
      <motion.div initial={{x:direction === 'left'? "0" : "-100%"}} animate={{x:direction==='left'?"-100%":"0"}} transition={{ease:"linear",duration:18,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageurls.map((urls, index) => (
          <img key={index} className=" " src={urls} />
        ))}
      </motion.div>
     
    </div>
  );
}

export default Marq;
