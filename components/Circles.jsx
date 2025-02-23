import React from "react";
import { motion } from "motion/react";

const Circles = () => {
  return (
    <div className="relative flex justify-center items-center mt-24 z-0">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.2,
          type: "spring",
          stiffness: 40,
        }}
        className="mt-[12rem] z-0 absolute border border-[#5e5e5e] w-[220px] h-[220px] opacity-15 rounded-full animate-pulse"
      />
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.2,
          type: "spring",
          stiffness: 20,
        }}
        className="mt-[12rem] z-0 absolute border border-[#5e5e5e] w-[380px] h-[380px] opacity-30 rounded-full animate-pulse"
      />
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1.35,
        }}
        transition={{
          ease: "easeInOut",
          duration: 1.2,
          type: "spring",
          stiffness: 80,
        }}
        className="mt-[12rem] z-0 absolute border border-[#5e5e5e] w-[385px] h-[385px] md:w-[420px] md:h-[420px] rounded-full animate-pulse"
      />
    </div>
  );
};

export default Circles;
