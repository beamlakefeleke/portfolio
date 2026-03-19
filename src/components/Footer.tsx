import React from 'react';
import { HeartIcon, ArrowUpIcon } from 'lucide-react';
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
}];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="relative z-10 mt-12 bg-secondary/30 backdrop-blur-md">
      {/* Animated Gradient Top Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tight text-white">
              Bamlake<span className="text-accent">.</span>
            </span>
          </div>

          {/* Repeated Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-accent-pink transition-colors">
              
                {link.name}
              </a>
            )}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-text-muted transition-all duration-300 group shadow-lg"
            aria-label="Scroll to top">
            
            <ArrowUpIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="h-[1px] w-full bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm font-medium tracking-wide">
            © {currentYear} Bamlake Feleke. All rights reserved.
          </p>

        </div>
      </div>
    </footer>);

}