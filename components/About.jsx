"use client";
import React from "react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  // const [about, setAbout] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [profileImage, setProfileImage] = useState("");
  useEffect(() => {
    async function aboutHandler(params) {
      const response = await axios.get(
        "https://ijjy6ogt.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27about%27%5D"
      );
      setTitle(() => response.data.result[0].title);
      setDescription(() => response.data.result[0].description);
      // const title = response.data.result[0].title;
      // const description = response.data.result[0].description;
      // const profileImage = 'https://cdn.sanity.io/images/ijjy6ogt/production/6fb6f33ed882a9c30ea4216f52311424552cac38-3762x5392.jpg'
      // setTitle(() => about.data.result[0].title);
      // console.log(about);
      // console.log(profileImage);
    }
    aboutHandler();
  }, []);

  const profileImage =
    "https://cdn.sanity.io/images/ijjy6ogt/production/6fb6f33ed882a9c30ea4216f52311424552cac38-3762x5392.jpg";
  // const [profile, setprofile] = useState();
  return (
    <div className="flex flex-col relative items-center h-screen text-center mx-auto">
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
        about
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center md:text-left mt-5">
        <motion.img
          initial={{
            x: -30,
            opacity: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileInView={{ x: 0, opacity: 1 }}
          src={profileImage}
          height="490px"
          width="450px"
          alt="about"
          className="mx-auto mt-28 mb-8 object-cover w-44 h-44 rounded-full md:rounded-md md:w-[25rem] md:h-[30rem]"
        />
        <div className="md:ml-16 space-y-8">
          <motion.p
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-black text-4xl md:text-5xl"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{
              y: 10,
              opacity: 0,
            }}
            transition={{ delay: 0.3, duration: 0.7 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-thin text-[.9rem] md:text-[1.1rem] w-80 md:w-96 tracking-wider"
          >
            {description}{" "}
            <span className="font-extralight">
              L
              <span className="underline underline-offset-[6px] decoration-orange-600">
                et's secure the futur
              </span>
              e!
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
