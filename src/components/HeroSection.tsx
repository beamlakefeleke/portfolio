import React, { useEffect, useState, useRef, Children, Component } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon, TerminalIcon } from 'lucide-react';
const roles = [
'Full-Stack Developer',
'Flutter Expert',
'MERN Specialist',
'Mobile App Developer'];

// Animated Counter Component
const Counter = ({
  from,
  to,
  duration = 2




}: {from: number;to: number;duration?: number;}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);
  return <span ref={ref}>{count}</span>;
};
export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      const nextText = isDeleting ?
      currentRole.substring(0, displayText.length - 1) :
      currentRole.substring(0, displayText.length + 1);
      setDisplayText(nextText);
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="home">
      
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          y: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/4 left-10 w-12 h-12 border border-accent/20 rounded-full opacity-15" />
      
      <motion.div
        animate={{
          rotate: -360,
          x: [0, 30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-accent-pink/20 opacity-15"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }} />
      
      <motion.div
        animate={{
          rotate: 180,
          y: [0, 40, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/3 right-1/4 w-10 h-10 border border-blue-500/20 opacity-15" />
      

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start z-10">
          
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-accent/30 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
            
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400 tracking-wide">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
            
            Hi, I'm <br />
            <span className="gradient-text text-shadow-glow">
              Bamlake Feleke
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-12 mb-6 flex items-center">
            
            <p className="text-2xl md:text-3xl font-medium text-text-muted">
              <span className="text-white">{displayText}</span>
              <span className="typing-cursor ml-1 inline-block h-[1em] w-[2px] bg-accent-pink align-middle"></span>
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed">
            
            I craft high-performance mobile and web applications. Specializing
            in Flutter and the MERN stack to bring innovative ideas to life with
            elegant code and beautiful design.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mb-16">
            
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-pink text-white font-bold hover:glow-purple-strong transition-all duration-300 flex items-center gap-2 group relative overflow-hidden">
              
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass border-white/20 hover:border-accent/50 hover:bg-white/10 text-white font-bold transition-all duration-300 hover:glow-purple">
              
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 w-full max-w-lg border-t border-white/10 pt-8 relative">
            
            <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-accent to-transparent" />
            <div>
              <h3 className="text-4xl font-black text-white mb-1 flex items-baseline">
                <Counter from={0} to={4} />
                <span className="text-accent-pink ml-1">+</span>
              </h3>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wider">
                Years Exp
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-white mb-1 flex items-baseline">
                <Counter from={0} to={23} />
                <span className="text-accent-pink ml-1">+</span>
              </h3>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wider">
                Projects
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-white mb-1 flex items-baseline">
                <Counter from={0} to={3} />
                <span className="text-accent-pink ml-1">+</span>
              </h3>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wider">
                Clients
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Code Card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotateY: 15
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: 'spring'
          }}
          className="relative z-10 hidden lg:block perspective-1000">
          
          {/* Decorative Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-accent/20 border-dashed animate-[spin_20s_linear_infinite] z-0" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent-pink/20 blur-3xl rounded-full z-0" />

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) =>
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full blur-[1px] animate-float z-20 ${i % 2 === 0 ? 'bg-accent' : 'bg-accent-pink'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.6
            }} />

          )}

          <div className="relative glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float z-10 backdrop-blur-3xl">
            {/* Mac-like Header */}
            <div className="bg-secondary/80 px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_#27c93f]" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs text-text-muted font-mono bg-white/5 px-3 py-1 rounded-md border border-white/5">
                <TerminalIcon className="w-3 h-3" /> developer.ts
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 code-block text-sm md:text-base bg-[#0d0d2b]/50">
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  1
                </span>
                <span>
                  <span className="text-accent-pink">const</span>{' '}
                  <span className="text-blue-400">developer</span>{' '}
                  <span className="text-accent-pink">=</span>{' '}
                  <span className="text-yellow-300">{'{'}</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  2
                </span>
                <span className="ml-4">
                  <span className="text-cyan-300">name:</span>{' '}
                  <span className="text-green-400">'Bamlake Feleke'</span>
                  <span className="text-white">,</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  3
                </span>
                <span className="ml-4">
                  <span className="text-cyan-300">role:</span>{' '}
                  <span className="text-green-400">'Full-Stack Developer'</span>
                  <span className="text-white">,</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  4
                </span>
                <span className="ml-4">
                  <span className="text-cyan-300">skills:</span>{' '}
                  <span className="text-purple-400">[</span>
                  <span className="text-green-400">'Flutter'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'MERN'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'TypeScript'</span>
                  <span className="text-purple-400">]</span>
                  <span className="text-white">,</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  5
                </span>
                <span className="ml-4">
                  <span className="text-cyan-300">location:</span>{' '}
                  <span className="text-green-400">
                    'Addis Ababa, Ethiopia'
                  </span>
                  <span className="text-white">,</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  6
                </span>
                <span className="ml-4">
                  <span className="text-cyan-300">hireable:</span>{' '}
                  <span className="text-orange-400 font-bold">true</span>
                </span>
              </div>
              <div className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                <span className="text-text-muted/50 w-8 select-none text-right pr-4">
                  7
                </span>
                <span className="text-yellow-300">{'}'}</span>
                <span className="text-white">;</span>
                <span className="typing-cursor h-[1.2em] w-[2px] bg-white/50 ml-1 inline-block align-middle"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}