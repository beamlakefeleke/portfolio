import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-12 mt-12">
      {/* Left: Text Introduction */}
      <motion.div
        variants={textVariant()}
        className="md:w-1/2 w-full px-4"
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>
          — Who I Am
        </p>
        <h2 className={`${styles.sectionHeadText} text-white mb-4`}>
          Developer. Designer. Visionary.
        </h2>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="text-gray-300 text-[17px] leading-[30px] bg-[#1c1c2b]/70 p-6 rounded-xl shadow-inner border border-[#3f3f4f]"
        >
          As a passionate MERN stack and Flutter developer, I specialize in building highly interactive, performant, and scalable applications. With a deep appreciation for detail and design, I combine tech and aesthetics to craft impactful digital experiences.
        </motion.p>
      </motion.div>

      {/* Right: Vertical Timeline for Services */}
      <motion.div
        variants={fadeIn("left", "spring", 0.3, 1)}
        className="md:w-1/2 w-full relative"
      >
        <div className="absolute left-4 top-0 h-full w-1 bg-[#915EFF] rounded-full" />

        <div className="flex flex-col gap-10 pl-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative"
              variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            >
              <div className="absolute -left-[35px] top-2 w-6 h-6 rounded-full bg-[#915EFF] border-2 border-[#1a1a2e]" />

              <div className="bg-[#1a1a2e]/80 backdrop-blur-lg border border-[#3f3f4f] rounded-xl px-6 py-4 shadow-lg">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description || "Crafting unique digital products with precision and creativity."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");
