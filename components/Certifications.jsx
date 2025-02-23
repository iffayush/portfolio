"use client";
import React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Certifications = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState([""]);
  useEffect(() => {
    async function certsHandler(params) {
      const response = await axios.get(
        "https://ijjy6ogt.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27certifications%27%5D%0A"
      );
      // console.log(response.data.result);
      const packetSize = await response.data.result[0];
      // console.log(packetSize);
      const description = await response.data.result[0].description;
      const title = await response.data.result[0].title;
      setDesc(() => description);
      setTitle(() => title);
      setSize(() => packetSize);
    }
    certsHandler();
  }, []);
  const projs = [];
  return (
    <div className="flex flex-col relative items-center h-screen text-left mx-auto justify-center">
      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="absolute font-normal text-xl uppercase top-[5rem] tracking-[.5rem] text-[#5e5e5e]"
      >
        Certificates
      </motion.h2>

      <div className="relative w-screen text-center flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <div className="space-y-3 snap-center snap-x items-center justify-between flex flex-col flex-shrink-0 p-12 md:p-44">
          <img
            src="/icon/google.svg"
            alt="google"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto"
          />
          <h2 className="font-bold text-4xl md:text-5xl w-[350px]">{title}</h2>
          <p className="uppercase tracking-widest font-thin text-md md:text-lg">
            <span className="underline decoration-amber-700 underline-offset-[6px]">
              {desc}
            </span>
          </p>
          <span className="font-normal">{/* {index} of {size} */}</span>
        </div>
      </div>

      <div className="w-full absolute top-[25%] bg-orange-600/10 h-[400px] -skew-y-12" />
    </div>
  );
};

export default Certifications;
