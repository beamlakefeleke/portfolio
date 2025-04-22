import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="min-w-[300px] sm:min-w-[340px] max-w-xs flex-shrink-0 snap-start bg-gradient-to-br from-[#1d1836] to-[#2c234d] rounded-3xl shadow-xl overflow-hidden border border-white/10 hover:shadow-purple-800/30 transition-all duration-500 group"
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-5 text-white flex flex-col justify-between h-60">
        <div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-sm text-gray-300 mt-2 line-clamp-3">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-2 py-1 text-xs font-medium rounded-full bg-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <button
          onClick={() => window.open(project.source_code_link, "_blank")}
          className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF] hover:bg-[#7a3eff] transition-all text-sm font-semibold"
        >
          <img src={github} alt="github" className="w-4 h-4" />
          View Code
        </button>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={`${styles.sectionSubText} text-gray-400`}>Things I've Built</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Projects Portfolio</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-center text-gray-300 text-lg max-w-4xl mx-auto leading-7 mb-12"
      >
        Explore a collection of my favorite work, spanning full-stack web development, interactive UIs, and mobile apps built with passion and precision.
      </motion.p>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 px-4 sm:px-8 snap-x snap-mandatory overflow-y-hidden">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
