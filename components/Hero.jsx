"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circles from "./Circles";


export default function Hero() {
  
  const [text, count] = useTypewriter({
    words: [`CYBERSECURITY ENGINEER`, "G. DESIGNER"],
    loop: true,
    delaySpeed: 2000,
  });
  
  

  return (
   
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden">
     
      <Circles />
      <img
        src="/profilepic.jpg"
        alt="profilepic"
        className="rounded-full relative h-[200px] w-[200px] -rotate-90 mx-auto "
      /> 
      <h1 className="uppercase text-lg font-extrabold text-[#5e5e5e] tracking-[.5rem] mt-4">
        Ayush Kumar
      </h1>
      <h1 className="text-[2.5rem] leading-[2.8rem] mt-3 z-20">
        <span className="font-extralight text-[2rem] tracking-widest leading-[.2rem]">
          {text}
        </span>
        <Cursor cursorColor="#ECECEC" cursorStyle="┃" />
      </h1>
          
    </div>
  );
};


