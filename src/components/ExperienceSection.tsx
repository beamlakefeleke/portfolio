import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
const experiences = [
{
  id: 1,
  company: 'Safaricom Ethiopia',
  role: 'Flutter Developer',
  period: 'June 2025 – Present',
  description:
  "Building and maintaining commercial trade applications for one of Ethiopia's leading telecom companies. Focusing on high performance and scalable architecture."
},
{
  id: 2,
  company: 'Afriuz',
  role: 'Full-Stack Developer',
  period: 'Aug 2025 – Jan 2026',
  description:
  'Developed e-commerce PWA with Next.js frontend, NestJS backend, and Telegram bot integration to streamline customer orders and notifications.'
},
{
  id: 3,
  company: 'Kehsuid Tech',
  role: 'Flutter Developer',
  period: 'Jan 2024 – Apr 2025',
  description:
  'Built e-commerce mobile application with Firebase backend and Provider state management. Implemented real-time inventory tracking and secure payments.'
},
{
  id: 4,
  company: 'Kehsuid Tech',
  role: 'Flutter Developer (Real Estate)',
  period: 'Sep 2023 – Dec 2023',
  description:
  'Developed real estate listing app with Firebase and GetX state management. Created complex filtering systems and interactive property maps.'
},
{
  id: 5,
  company: 'Self Project',
  role: 'MERN Developer',
  period: 'Jun 2023 – Aug 2023',
  description:
  'Built full-stack e-commerce website using React, Node.js, Express, and MongoDB. Implemented user authentication, cart functionality, and admin dashboard.'
},
{
  id: 6,
  company: 'Sixam Mart',
  role: 'Flutter Maintenance',
  period: 'May 2023 – Jun 2024',
  description:
  'Maintained and enhanced multi-vendor delivery application built with Flutter. Resolved critical bugs and improved app performance by 30%.'
}];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number>(1);
  return (
    <section className="py-32 relative z-10" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-20">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-accent font-mono text-sm uppercase tracking-widest">
              Career Path
            </span>
          </div>
          <h2 className="text-5xl font-black mb-4 inline-block relative text-shadow-glow">
            Work Experience
            <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-accent to-accent-pink rounded-full" />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Glowing Timeline Connector (Desktop Only) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/10 via-accent-pink/50 to-accent/10 shadow-[0_0_15px_rgba(232,121,249,0.5)] z-0 rounded-full" />

          {/* Desktop: Horizontal Accordion, Mobile: Vertical Accordion */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[450px] relative z-10">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              const isCurrent = exp.period.includes('Present');
              return (
                <motion.div
                  key={exp.id}
                  layout
                  onClick={() => setExpandedId(exp.id)}
                  className={`relative glass rounded-3xl cursor-pointer overflow-hidden flex flex-col transition-all duration-500 group ${isExpanded ? 'lg:flex-[3] bg-white/[0.06] border-accent/40 shadow-[0_0_30px_rgba(145,94,255,0.1)]' : 'lg:flex-[1] border-white/5 hover:border-accent/30 hover:bg-white/[0.05]'}`}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25
                  }}>
                  
                  {/* Active Glowing Dot on Timeline */}
                  {isExpanded &&
                  <motion.div
                    layoutId="active-timeline-dot"
                    className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_30px_#e879f9] z-20" />

                  }

                  <div
                    className={`p-8 flex flex-col h-full ${isExpanded ? '' : 'lg:items-center'}`}>
                    
                    {/* Header Area */}
                    <div
                      className={`flex items-center gap-5 mb-6 ${isExpanded ? '' : 'lg:flex-col lg:justify-start lg:h-full lg:mt-4'}`}>
                      
                      {/* Gradient Border Icon */}
                      <div
                        className={`relative p-[2px] rounded-2xl shrink-0 transition-all duration-500 ${isExpanded ? 'bg-gradient-to-br from-accent to-accent-pink shadow-lg' : 'bg-white/10 group-hover:bg-accent/50'}`}>
                        
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center ${isExpanded ? 'bg-secondary' : 'bg-primary'}`}>
                          
                          <BriefcaseIcon
                            className={`w-6 h-6 ${isExpanded ? 'text-accent-pink' : 'text-text-muted group-hover:text-white'}`} />
                          
                        </div>
                      </div>

                      <div className={`${isExpanded ? 'block' : 'lg:hidden'}`}>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-2xl font-bold text-white whitespace-nowrap">
                            {exp.company}
                          </h3>
                          {isCurrent && isExpanded &&
                          <span className="px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold tracking-wider uppercase border border-green-500/30">
                              Current
                            </span>
                          }
                        </div>
                        <p className="text-accent-pink font-medium text-lg">
                          {exp.role}
                        </p>
                      </div>

                      {/* Vertical text for collapsed state on desktop */}
                      {!isExpanded &&
                      <div
                        className="hidden lg:block mt-8 text-text-muted font-bold tracking-[0.2em] uppercase text-lg group-hover:text-white transition-colors"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)'
                        }}>
                        
                          {exp.company}
                        </div>
                      }
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded &&
                      <motion.div
                        initial={{
                          opacity: 0
                        }}
                        animate={{
                          opacity: 1
                        }}
                        exit={{
                          opacity: 0
                        }}
                        className="flex-1 flex flex-col justify-between mt-4">
                        
                          <motion.p
                          initial={{
                            opacity: 0,
                            y: 10
                          }}
                          animate={{
                            opacity: 1,
                            y: 0
                          }}
                          transition={{
                            delay: 0.2
                          }}
                          className="text-text-muted text-lg leading-relaxed font-light">
                          
                            {exp.description}
                          </motion.p>

                          <motion.div
                          initial={{
                            opacity: 0,
                            y: 10
                          }}
                          animate={{
                            opacity: 1,
                            y: 0
                          }}
                          transition={{
                            delay: 0.3
                          }}
                          className="flex items-center gap-3 text-sm text-white/60 mt-8 pt-6 border-t border-white/10 font-mono">
                          
                            <CalendarIcon className="w-4 h-4 text-accent" />
                            <span>{exp.period}</span>
                          </motion.div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}