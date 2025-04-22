import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.4, 0.75)}
      className="min-w-[320px] md:min-w-[380px] bg-[#1d1836]/70 backdrop-blur-md border border-[#2b2b45] rounded-2xl p-6 shadow-lg hover:shadow-gray-500/20 transition-shadow duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold">{experience.title}</h3>
          <p className="text-sm text-purple-300">{experience.company_name}</p>
          <p className="text-gray-400 text-xs mt-1">{experience.date}</p>
        </div>
      </div>
      <ul className="list-disc ml-5 mt-2 space-y-2 text-sm text-gray-300">
        {experience.points.map((point, idx) => (
          <li key={`exp-point-${idx}`} className="leading-snug">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-12 text-center ">
        <p className={styles.sectionSubText}>Career Journey</p>
        <h2 className={styles.sectionHeadText}>Experience Highlights</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-500/50"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={`exp-${index}`} index={index} experience={exp} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
