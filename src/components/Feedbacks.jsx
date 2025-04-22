import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    className="flex-shrink-0 bg-gradient-to-br from-[#1d1836] to-[#2c234d] text-white rounded-3xl p-8 w-[320px] sm:w-[360px] h-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="text-[40px] leading-none mb-4 text-gradient">“</div>
    <p className="text-[16px] text-white leading-relaxed mb-6">
      {testimonial}
    </p>
    <div className="border-t border-white/10 pt-4">
      <p className="font-semibold text-[16px] text-white">@{name}</p>
      <p className="text-[14px] text-gray-400">
        {designation} • {company}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section className="relative w-full py-16 bg-black-100 overflow-hidden">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials</h2>
      </motion.div>

      <div className="w-full overflow-x-auto flex space-x-6 px-6 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
