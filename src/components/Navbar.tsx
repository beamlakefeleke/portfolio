import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, Code2Icon } from 'lucide-react';
const navLinks = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Tech Stack',
  href: '#tech'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Active section highlighting
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-strong py-4 border-b border-accent/20 shadow-[0_4px_30px_rgba(145,94,255,0.1)]' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group relative">
          <div className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 bg-secondary rounded-xl z-10 m-[1px] flex items-center justify-center bg-opacity-90 backdrop-blur-sm group-hover:bg-opacity-80 transition-all">
              <Code2Icon className="w-5 h-5 text-accent-pink group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,theme(colors.accent),theme(colors.accent-pink),theme(colors.accent))] animate-[spin_3s_linear_infinite] z-0" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-shadow-glow transition-all duration-300">
            Bamlake<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors py-2 ${isActive ? 'text-white' : 'text-text-muted hover:text-white'}`}>
                
                {link.name}
                {isActive &&
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-pink rounded-full glow-purple"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }} />

                }
              </a>);

          })}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 hover:glow-purple transition-all duration-300 text-sm font-medium relative overflow-hidden group">
            
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-pink/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-muted hover:text-white transition-colors relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu">
          
          {isMobileMenuOpen ?
          <XIcon className="w-6 h-6" /> :

          <MenuIcon className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="absolute top-full left-0 right-0 glass-strong border-t border-accent/20 p-6 flex flex-col gap-2 md:hidden overflow-hidden">
          
            {navLinks.map((link, i) =>
          <motion.a
            key={link.name}
            href={link.href}
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            transition={{
              delay: i * 0.1
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${activeSection === link.href.substring(1) ? 'bg-accent/10 text-accent-pink border border-accent/20' : 'text-text-muted hover:bg-white/5 hover:text-white'}`}>
            
                {link.name}
              </motion.a>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}