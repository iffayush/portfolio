"use client";
import React from "react";
import { motion } from "motion/react";
import ExperienceCards from "./ExperienceCards";
import { useState, useEffect } from "react";
import axios from "axios";

const Experience = () => {
  const used = ["muthmari", "chutmari"];
  const [card, setCard] = useState([]);
  const icons = [
    [
      "https://cdn.sanity.io/images/ijjy6ogt/production/12c566b5628ef7aed06935565c17e4a3ae489e77-81x79.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/60220c08052478cd85b9d1af8c0e544b6fafb23c-74x72.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/9258c985ad22a3a55ee4b0d6d5cadff221901a59-38x37.svg?w=2000&fit=max&auto=format",
    ],
    [
      "https://cdn.sanity.io/images/ijjy6ogt/production/12c566b5628ef7aed06935565c17e4a3ae489e77-81x79.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/60220c08052478cd85b9d1af8c0e544b6fafb23c-74x72.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/9258c985ad22a3a55ee4b0d6d5cadff221901a59-38x37.svg?w=2000&fit=max&auto=format",
    ],
    [
      "https://cdn.sanity.io/images/ijjy6ogt/production/12c566b5628ef7aed06935565c17e4a3ae489e77-81x79.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/60220c08052478cd85b9d1af8c0e544b6fafb23c-74x72.svg?w=2000&fit=max&auto=format",
      "https://cdn.sanity.io/images/ijjy6ogt/production/9258c985ad22a3a55ee4b0d6d5cadff221901a59-38x37.svg?w=2000&fit=max&auto=format",
    ],
  ];
  const logos = [
    "https://cdn.sanity.io/images/ijjy6ogt/production/dfaf5faea927d9ac9fbbe1ec7c368794a8ffd7b0-297x297.png?w=2000&fit=max&auto=format",
    "https://cdn.sanity.io/images/ijjy6ogt/production/4d42b65df47a56f535e5c9ab59767932ee98d201-4500x4500.png?w=2000&fit=max&auto=format",
    "https://cdn.sanity.io/images/ijjy6ogt/production/a31759cf7bd39be57d9c6e0ec2ddfef9515e4597-4500x3869.png?w=2000&fit=max&auto=format",
  ];
  const Bullets = [
    [
      "Designed and curated high-quality posts, reels, and stories tailored to audience interests, boosting engagement and interactions.",
      "Analyzed insights and metrics to optimize posting times, content formats, and trends, leading to increased reach and follower growth.",
      "Combined high-quality visuals with data insights to refine content strategy, ensuring posts were both visually appealing and strategically timed for the best audience response.",
    ],
    [
      "Designed social media graphics, marketing materials, and brand assets to enhance visual appeal and audience engagement.",
      "Supported the design team in refining visuals, adjusting layouts, and ensuring consistency across all digital and print materials.",
      "Applied feedback and design principles to improve aesthetics, making content both visually compelling and strategically effective.",
    ],
    [
      "Created high-quality graphics, layouts, and branding elements to enhance engagement across digital platforms.",
      "Edited and structured written content to ensure clarity, consistency, and alignment with brand voice and audience preferences.",
      "Combined strong editing skills with strategic design to craft visually appealing and well-structured content that maximized audience engagement.",
    ],
  ];
  useEffect(() => {
    async function expHandler(params) {
      const response = await axios.get(
        "https://ijjy6ogt.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27experience%27%5D%0A"
      );
      setCard(() => response.data.result);
      // console.log(response.data.result);
    }
    expHandler();
  }, []);

  return (
    <div className="flex flex-col relative items-center h-screen text-left mx-auto justify-evenly">
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
        Experience
      </motion.h2>
      <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory snap-center space-x-5">
        {card.map((items, i) => {
          // console.log(items);
          // const spartanShield = card[0].content[i].children[0].text;
          return (
            <ExperienceCards
              key={i}
              logo={logos[i]}
              title={items.title}
              designation={items.designation}
              bullets={Bullets[i]}
              skillsUsed={icons[i]}
            />
          );
        })}

        {/* <ExperienceCards
          title="Spartanshield"
          skillsUsed={used}
          points={used}
        /> */}

        {/* <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards /> */}
      </div>
    </div>
  );
};

export default Experience;
