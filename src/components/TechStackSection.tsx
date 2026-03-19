import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database', 'Tools'];
const technologies = [
{
  name: 'Flutter',
  category: 'Mobile',
  color: 'text-blue-400',
  bg: 'bg-blue-400',
  border: 'border-blue-400'
},
{
  name: 'Dart',
  category: 'Mobile',
  color: 'text-cyan-300',
  bg: 'bg-cyan-300',
  border: 'border-cyan-300'
},
{
  name: 'React.js',
  category: 'Frontend',
  color: 'text-cyan-400',
  bg: 'bg-cyan-400',
  border: 'border-cyan-400'
},
{
  name: 'Next.js',
  category: 'Frontend',
  color: 'text-white',
  bg: 'bg-white',
  border: 'border-white'
},
{
  name: 'Vue.js',
  category: 'Frontend',
  color: 'text-emerald-400',
  bg: 'bg-emerald-400',
  border: 'border-emerald-400'
},
{
  name: 'TypeScript',
  category: 'Frontend',
  color: 'text-blue-500',
  bg: 'bg-blue-500',
  border: 'border-blue-500'
},
{
  name: 'JavaScript',
  category: 'Frontend',
  color: 'text-yellow-400',
  bg: 'bg-yellow-400',
  border: 'border-yellow-400'
},
{
  name: 'Tailwind CSS',
  category: 'Frontend',
  color: 'text-teal-400',
  bg: 'bg-teal-400',
  border: 'border-teal-400'
},
{
  name: 'HTML5',
  category: 'Frontend',
  color: 'text-orange-500',
  bg: 'bg-orange-500',
  border: 'border-orange-500'
},
{
  name: 'CSS3',
  category: 'Frontend',
  color: 'text-blue-500',
  bg: 'bg-blue-500',
  border: 'border-blue-500'
},
{
  name: 'Node.js',
  category: 'Backend',
  color: 'text-green-500',
  bg: 'bg-green-500',
  border: 'border-green-500'
},
{
  name: 'NestJS',
  category: 'Backend',
  color: 'text-red-500',
  bg: 'bg-red-500',
  border: 'border-red-500'
},
{
  name: 'Python',
  category: 'Backend',
  color: 'text-yellow-500',
  bg: 'bg-yellow-500',
  border: 'border-yellow-500'
},
{
  name: 'PHP',
  category: 'Backend',
  color: 'text-indigo-400',
  bg: 'bg-indigo-400',
  border: 'border-indigo-400'
},
{
  name: 'MongoDB',
  category: 'Database',
  color: 'text-green-500',
  bg: 'bg-green-500',
  border: 'border-green-500'
},
{
  name: 'PostgreSQL',
  category: 'Database',
  color: 'text-blue-400',
  bg: 'bg-blue-400',
  border: 'border-blue-400'
},
{
  name: 'Firebase',
  category: 'Database',
  color: 'text-yellow-500',
  bg: 'bg-yellow-500',
  border: 'border-yellow-500'
},
{
  name: 'Supabase',
  category: 'Database',
  color: 'text-emerald-500',
  bg: 'bg-emerald-500',
  border: 'border-emerald-500'
},
{
  name: 'Git',
  category: 'Tools',
  color: 'text-orange-500',
  bg: 'bg-orange-500',
  border: 'border-orange-500'
},
{
  name: 'Docker',
  category: 'Tools',
  color: 'text-blue-500',
  bg: 'bg-blue-500',
  border: 'border-blue-500'
},
{
  name: 'Figma',
  category: 'Tools',
  color: 'text-pink-400',
  bg: 'bg-pink-400',
  border: 'border-pink-400'
},
{
  name: 'GraphQL',
  category: 'Tools',
  color: 'text-pink-500',
  bg: 'bg-pink-500',
  border: 'border-pink-500'
},
{
  name: 'WebRTC',
  category: 'Tools',
  color: 'text-gray-300',
  bg: 'bg-gray-300',
  border: 'border-gray-300'
},
{
  name: 'REST APIs',
  category: 'Tools',
  color: 'text-accent',
  bg: 'bg-accent',
  border: 'border-accent'
}];

// 3D Tilt Card Component
const TiltCard = ({ tech, index }: {tech: any;index: number;}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    // Calculate rotation (max 15 degrees)
    const rotateXValue = (y - centerY) / centerY * -15;
    const rotateYValue = (x - centerX) / centerX * 15;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        y: -20
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.03
      }}
      className="card-3d h-full">
      
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.5
        }}
        className={`relative h-full glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.06] transition-colors group cursor-default border-t-2 border-t-transparent hover:${tech.border}`}>
        
        {/* Glow behind icon */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${tech.bg} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
        

        {/* Styled Icon Badge */}
        <div
          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black ${tech.color} bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          
          <div
            className={`absolute inset-0 rounded-2xl ${tech.bg} opacity-10`} />
          
          {tech.name.substring(0, 1).toUpperCase()}
        </div>

        <span className="text-sm font-bold text-text-muted group-hover:text-white transition-colors text-center tracking-wide">
          {tech.name}
        </span>
      </motion.div>
    </motion.div>);

};
export function TechStackSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredTech = technologies.filter(
    (tech) => activeFilter === 'All' || tech.category === activeFilter
  );
  return (
    <section className="py-32 relative z-10" id="tech">
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
          className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-accent font-mono text-sm uppercase tracking-widest">
                Skills
              </span>
            </div>
            <h2 className="text-5xl font-black mb-4 inline-block relative text-shadow-glow">
              Tech Stack
              <div className="absolute -bottom-3 left-0 w-1/2 h-1.5 bg-gradient-to-r from-accent to-accent-pink rounded-full" />
            </h2>
          </div>

          {/* Animated Filters */}
          <div className="flex flex-wrap gap-2 glass p-2 rounded-2xl border-white/10">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-colors z-10 ${isActive ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                  
                  {isActive &&
                  <motion.div
                    layoutId="tech-filter"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent-pink rounded-xl -z-10 shadow-[0_0_15px_rgba(145,94,255,0.4)]"
                    initial={false}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }} />

                  }
                  {category}
                </button>);

            })}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, index) =>
            <TiltCard key={tech.name} tech={tech} index={index} />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}