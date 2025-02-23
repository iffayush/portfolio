"use client";
import React from "react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  const body = useRef("");
  const subject = useRef("");
  // const [subject, setSubject] = useState("");
  // const [body, setBody] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    // const data = formdata.current;
    // setBody(() => data["body"].value);
    // setSubject(() => data["su"].value);
    // console.log(subject.current.valueOf, body.current.valueOf);
    router.push(
      `mailto:iffayush.work?subject=${subject.current.value}&body=${body.current.value}`
    );
  };
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
        Contact
      </motion.h2>
      {/*https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com*/}
      <section className="mt-28 text-left w-full">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="to"
                className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-[#252525] border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                ref={subject}
                type="text"
                id="subject"
                name="su"
                className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-[#252525] border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your message
              </label>
              <textarea
                ref={body}
                id="message"
                rows="6"
                name="body"
                className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-[#252525] border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            onClick={clickHandler}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-600 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 focus:ring-primary-800"
          >
            Send message
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
