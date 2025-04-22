import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";

const TechCard = ({ tech, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-xl bg-[#1d1836]/60 backdrop-blur-md border border-[#3a3a5c] shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
  >
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={250}
      className="w-full h-full flex flex-col items-center justify-center p-4"
    >
      <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain mb-2" />
      <p className="text-xs sm:text-sm text-center text-gray-200">{tech.name}</p>
    </Tilt>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>Tech Toolbox</p>
        <h2 className={styles.sectionHeadText}>Technologies I Use</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");