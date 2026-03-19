import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SmartphoneIcon,
  CodeIcon,
  LayersIcon,
  TabletSmartphoneIcon,
  GraduationCapIcon } from
'lucide-react';
const services = [
{
  title: 'Flutter Developer',
  description:
  'Cross-platform mobile apps with beautiful UIs and native performance.',
  icon: SmartphoneIcon,
  accent: 'from-accent to-accent-pink',
  hoverBorder: 'group-hover:border-t-accent'
},
{
  title: 'Full-Stack Developer',
  description:
  'End-to-end web application development from database to frontend.',
  icon: CodeIcon,
  accent: 'from-cyan-400 to-blue-500',
  hoverBorder: 'group-hover:border-t-cyan-400'
},
{
  title: 'MERN Stack',
  description: 'Robust solutions using MongoDB, Express, React, and Node.js.',
  icon: LayersIcon,
  accent: 'from-green-400 to-emerald-600',
  hoverBorder: 'group-hover:border-t-green-400'
},
{
  title: 'Mobile App Developer',
  description:
  'Native-quality mobile experiences tailored for iOS and Android.',
  icon: TabletSmartphoneIcon,
  accent: 'from-pink-400 to-rose-600',
  hoverBorder: 'group-hover:border-t-pink-400'
}];

export function AboutSection() {
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, {
    once: true
  });
  return (
    <section className="py-32 relative z-10" id="about">
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
              Introduction
            </span>
          </div>
          <h2 className="text-5xl font-black mb-6 inline-block relative text-shadow-glow">
            About Me
            <div className="absolute -bottom-3 left-0 w-2/3 h-1.5 bg-gradient-to-r from-accent to-accent-pink rounded-full" />
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mt-8 leading-relaxed font-light">
            Experienced Software Developer specializing in Flutter and MERN
            stack development. Based in Addis Ababa, Ethiopia, I build
            high-quality mobile and web applications that deliver exceptional
            user experiences and solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: 'spring'
            }}
            className={`relative glass p-8 rounded-2xl transition-all duration-500 group cursor-default overflow-hidden border-t-2 border-t-transparent ${service.hoverBorder} hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(145,94,255,0.2)]`}>
            
              {/* Large Background Number */}
              <div className="absolute -right-4 -bottom-4 text-8xl font-black text-white opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none select-none">
                0{index + 1}
              </div>

              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent z-[-1]" />
              </div>

              <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
              
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="relative glass-strong p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-8 overflow-hidden group">
          
          {/* Decorative background glow */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700" />

          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_20px_rgba(145,94,255,0.2)] relative z-10">
            <GraduationCapIcon className="w-10 h-10 text-accent-pink" />
          </div>

          <div className="flex-1 relative z-10 w-full">
            <h3 className="text-3xl font-bold text-white mb-2">Education</h3>
            <p className="text-xl text-text-muted mb-4 font-light">
              BSc Computer Science & Engineering
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent-pink font-medium border border-accent/20">
                Adama Science and Technology University
              </span>
            </div>

            {/* Animated CGPA Progress Bar */}
            <div className="w-full max-w-md" ref={progressRef}>
              <div className="flex justify-between text-sm mb-2 font-mono">
                <span className="text-text-muted">CGPA</span>
                <span className="text-green-400 font-bold">3.6 / 4.0</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full relative"
                  initial={{
                    width: 0
                  }}
                  animate={
                  isProgressInView ?
                  {
                    width: '87.5%'
                  } :
                  {
                    width: 0
                  }
                  }
                  transition={{
                    duration: 1.5,
                    ease: 'easeOut',
                    delay: 0.5
                  }}>
                  
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}