import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, StarIcon } from 'lucide-react';
const projects = [
{
  title: 'Safaricom Commercial Trade App',
  description:
  'Commercial trade management app for Safaricom Ethiopia. Features complex state management, offline capabilities, and secure API integrations.',
  tech: ['Flutter', 'BLoC', 'REST API'],
  featured: true,
  size: 'large',
  colSpan: 'md:col-span-2',
  rowSpan: 'md:row-span-1'
},
{
  title: 'Afriuz E-commerce PWA',
  description:
  'Full-featured e-commerce PWA with admin dashboard and Telegram integration for real-time order notifications and management.',
  tech: ['Next.js', 'NestJS', 'Telegram Bot'],
  featured: true,
  size: 'large',
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-2'
},
{
  title: 'SafeCrop Disease Detection',
  description:
  'Plant disease detection application using on-device machine learning models achieving 85% accuracy.',
  tech: ['Flutter', 'ML', 'SQLite'],
  featured: false,
  size: 'small',
  highlight: '85% Accuracy',
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1'
},
{
  title: 'Kehsuid E-commerce',
  description:
  'Mobile e-commerce application featuring real-time inventory management and secure payment gateways.',
  tech: ['Flutter', 'Firebase', 'Provider'],
  featured: false,
  size: 'small',
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1'
},
{
  title: 'Real Estate App',
  description:
  'Property listing and search application with advanced filtering and interactive maps.',
  tech: ['Flutter', 'Firebase', 'GetX'],
  featured: false,
  size: 'small',
  colSpan: 'md:col-span-1',
  rowSpan: 'md:row-span-1'
},
{
  title: 'MERN E-commerce',
  description:
  'Full-stack e-commerce website with cart, authentication, and payment integration.',
  tech: ['React', 'Node.js', 'MongoDB'],
  featured: false,
  size: 'small',
  colSpan: 'md:col-span-2',
  rowSpan: 'md:row-span-1'
}];

// Mock UI Wireframe Component
const MockUI = ({ isLarge }: {isLarge: boolean;}) =>
<div
  className={`w-full ${isLarge ? 'h-40' : 'h-28'} bg-gradient-to-b from-secondary to-primary/50 rounded-t-2xl border-b border-white/5 relative overflow-hidden p-4 flex flex-col gap-3`}>
  
    {/* Mac dots */}
    <div className="flex gap-1.5 mb-2">
      <div className="w-2 h-2 rounded-full bg-white/20" />
      <div className="w-2 h-2 rounded-full bg-white/20" />
      <div className="w-2 h-2 rounded-full bg-white/20" />
    </div>
    {/* Wireframe lines */}
    <div className="w-1/3 h-3 bg-white/10 rounded-full" />
    <div className="w-3/4 h-2 bg-white/5 rounded-full" />
    <div className="w-1/2 h-2 bg-white/5 rounded-full" />
    {isLarge &&
  <div className="mt-auto flex gap-2">
        <div className="w-12 h-12 bg-white/5 rounded-lg" />
        <div className="flex-1 bg-white/5 rounded-lg" />
      </div>
  }
  </div>;

export function ProjectsSection() {
  return (
    <section className="py-32 relative z-10" id="projects">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl font-black mb-4 inline-block relative text-shadow-glow">
            Featured Projects
            <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-accent to-accent-pink rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {projects.map((project, index) =>
          <motion.div
            key={project.title}
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
            transition={{
              delay: index * 0.1,
              duration: 0.6
            }}
            className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(145,94,255,0.3)] ${project.colSpan} ${project.rowSpan}`}>
            
              {/* Animated Gradient Border for Featured */}
              {project.featured ?
            <div className="absolute inset-0 p-[1px] rounded-3xl overflow-hidden">
                  <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.accent)_360deg)] animate-[spin_4s_linear_infinite]" />
                  <div className="absolute inset-[1px] bg-secondary rounded-[23px]" />
                </div> :

            <div className="absolute inset-0 glass rounded-3xl" />
            }

              <div className="relative h-full flex flex-col z-10 bg-secondary/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                <MockUI isLarge={project.size === 'large'} />

                {/* Large Background Number */}
                <div className="absolute right-4 bottom-4 text-8xl font-black text-white opacity-[0.02] pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between relative z-10">
                  {/* Top Row */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2 items-center">
                        {project.featured &&
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-pink uppercase tracking-wider bg-accent-pink/10 px-2.5 py-1 rounded-md border border-accent-pink/20">
                            <StarIcon className="w-3 h-3 fill-accent-pink" />{' '}
                            Featured
                          </span>
                      }
                        {project.highlight &&
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-green-400 uppercase tracking-wider bg-green-400/10 px-2.5 py-1 rounded-md border border-green-400/20">
                            {project.highlight}
                          </span>
                      }
                      </div>
                      <h3
                      className={`font-black text-white tracking-tight ${project.size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                      
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-300">
                      <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-text-muted transition-all shadow-lg">
                      
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-pink hover:border-accent-pink hover:text-white text-text-muted transition-all shadow-lg">
                      
                        <ExternalLinkIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="mt-auto">
                    <p className="text-text-muted mb-6 font-light leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) =>
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold rounded-md bg-white/5 border border-white/10 text-gray-300 tracking-wide">
                      
                          {tech}
                        </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}