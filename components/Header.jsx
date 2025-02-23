"use client";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky top-2 p-5 flex items-start justify-between max-w-7xl mx-auto z-220">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center space-x-5"
      >
        <FaLinkedin
          size={30}
          color="#5e5e5e"
          onClick={() => router.push("https://www.linkedin.com/in/iffayush")}
        />

        <FaInstagram
          size={30}
          color="#5e5e5e"
          onClick={() =>
            router.push("https://www.instagram.com/weebcreations.01")
          }
        />

        <FaGithub
          size={30}
          color="#5e5e5e"
          onClick={() => router.push("https://www.github.com/iffayush")}
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center "
      >
        <LuMail size={30} color="#5e5e5e" />
        <p
          className="hidden md:inline-flex font-light border border-[#5e5e5e] text-white px-8 rounded-lg ml-4"
          onClick={() =>
            router.push("https://mail.google.com/mail/u/0/#inbox?compose=new")
          }
        >
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
