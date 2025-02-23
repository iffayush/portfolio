"use client";
import React from "react";
import { motion } from "motion/react";

const ExperienceCards = ({ title, logo, designation, skillsUsed, bullets }) => {
  return (
    <article className="w-[350px] md:w-[600px] bg-[#292929] rounded-xl p-10 mt-16 md:mt-28 flex-shrink-0 snap-center hover:opacity-100 md:opacity-40">
      <motion.img
        initial={{
          opacity: 0,
          y: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-24 h-24 rounded-full object-cover mx-auto"
        src={logo || "/spartan.png"}
        alt=""
      />
      <div className="mt-6">
        <h4 className="uppercase text-2xl md:text-4xl font-semibold text-center">
          {title}
        </h4>

        <p className="font-light text-md md:text-lg text-center">
          {designation}
        </p>

        <div className="flex space-x-1 mt-4 my-0 max-w-full justify-center">
          {/* <img src="/ps.svg" className="inline-block w-8 h-8" />
          <img src="/ai.svg" className="inline-block w-8 h-8" />
          <img
            src="/board.svg"
            className="inline-block w-[1.85rem] h-[1.85rem]"
          /> */}
          {skillsUsed.map((source, i) => {
            return (
              <img key={i} src={source} className="inline-block w-8 h-8" />
            );
          })}
        </div>

        <ul className="list-disc space-y-4 ml-12 md:ml-20 text-sm md:text-lg mt-6 max-w-full">
          {/* <li>Lorem ipsum dolor sit amet consectetur consectetur</li>
          <li>Lorem ipsum dolor sit amet consectetur consectetur</li>
          <li>Lorem ipsum dolor sit amet consectetur consectetur</li>
          <li>Lorem ipsum dolor sit amet consectetu consectetur</li> */}

          {bullets.map((pointers, index) => {
            return <li key={index}>{pointers}</li>;
          })}
        </ul>
      </div>
      <div>
        <p className="float-right font-thin">{">>"}</p>
      </div>
    </article>
  );
};

export default ExperienceCards;
