import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";

function Products() {
  var products = [
    {
      title: "ariqtel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [Pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none  ">
        <motion.div
          initial={{ y: Pos, x: "-50%" }}
          animate={{ y: Pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window  rounded-3xl h-[23rem] absolute w-[32rem] left-[44%] overflow-hidden  "
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            animate={{ y: -Pos + `rem` }}
            className="  h-full  w-full  "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            animate={{ y: -Pos + `rem` }}
            className="  h-full  w-full   "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            animate={{ y: -Pos + `rem` }}
            className="  h-full  w-full "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            animate={{ y: -Pos + `rem` }}
            className="  h-full  w-full  "
          >
            {" "}
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
