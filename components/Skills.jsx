"use client";
import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  const skillList = [
    // "https://cdn.sanity.io/images/ijjy6ogt/production/e972ac6094d7d0d51fdb820cd299203149cd20ec-86x86.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/f6c4697b1fb4f3a0114a359b2855b4c048ea8bdc-94x94.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/395313226b68e3541113cfcae110826826097643-92x92.svg?w=2000&fit=max&auto=format",

    // "https://cdn.sanity.io/images/ijjy6ogt/production/0898b275f28b66b93392f22589e31f40844120f5-92x92.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/47146ad6cd2c0547aed9d801bcd11d3f78adad95-69x71.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/ad522356d886d2fe789eae71354e72fcc497fd9c-86x86.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/92b7bc07c5367f01b4d9af02c5364f3231c711f4-94x94.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/5af58573eb4b73900f1a2333395f45349494358d-60x55.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/972373192b42c60a056ca7e6f220605099714f2e-87x87.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/59aef192f98afea164691b4e649ccd7cb9cd339c-94x94.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/f33efe8599fdec533bd64a65791ab660d0aac717-77x79.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/3660ee0d59ae1311686bf27ed5adcd776d5b29d5-92x90.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/a2256a75d796edc9825c6b2f44656327dc8520ee-92x92.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/eaa3512a5389b4673c1f3e20c6b040ddd7a39d4d-92x92.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/a9c3134b91d18c6f48718d9ebeab0eb322040c43-85x60.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/cff3f020bdd34cab9fff0415f05b27af0be3de4c-94x94.svg?w=2000&fit=max&auto=format",

    "https://cdn.sanity.io/images/ijjy6ogt/production/01958f0378cf6b6150f908ce24aa8e055f3a8275-94x94.svg?w=2000&fit=max&auto=format",
  ];
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
        className="absolute font-normal text-xl uppercase top-[5rem] tracking-[1rem] text-[#5e5e5e]"
      >
        Skills
      </motion.h2>
      <div className="flex flex-row space-x-2 md:space-x-4 space-y-4 flex-wrap w-[300px] md:w-[450px] mx-auto justify-center">
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.05 }}
          src={
            "https://cdn.sanity.io/images/ijjy6ogt/production/0898b275f28b66b93392f22589e31f40844120f5-92x92.svg?w=2000&fit=max&auto=format"
          }
          alt="python"
          className="h-16 w-16 md:h-20 md:w-20 mt-4"
        />
        {skillList.map((skill, index) => {
          return (
            <motion.img
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              src={skill}
              alt="js"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          );
        })}

        {/* <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          src="\icon\js.svg"
          alt="js"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          src="\icon\c.svg"
          alt="c"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          src="\icon\bash.svg"
          alt="bash"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25 }}
          src="\icon\network.svg"
          alt="network"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          src="\icon\nist_1.svg"
          alt="nist_1"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
          src="\icon\vulnerability.svg"
          alt="vulnerability"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          src="\icon\wireshark.svg"
          alt="wireshark"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.45 }}
          src="\icon\nmap.svg"
          alt="nmap"
          className="h-16 w-16 md:h-20 md:w-20"
        />

        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          src="\icon\docker.svg"
          alt="docker"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.55 }}
          src="\icon\git.svg"
          alt="git"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          src="\icon\github.svg"
          alt="gihubt"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.65 }}
          src="\icon\sql.svg"
          alt="sql"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          src="\icon\mongo.svg"
          alt="mongo"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.75 }}
          src="\icon\postgres.svg"
          alt="postgres"
          className="h-16 w-16 md:h-20 md:w-20"
        />
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          src="\icon\firebase.svg"
          alt="firebase"
          className="h-16 w-16 md:h-20 md:w-20"
        /> */}
      </div>
    </div>
  );
};

export default Skills;
