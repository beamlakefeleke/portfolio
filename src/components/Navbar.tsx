import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../App';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Stack',      href: '#tech' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileOpen, setIsMobileOpen]     = useState(false);
  const [activeSection, setActiveSection]   = useState('');
  const { theme, toggleTheme }              = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'themed-bg border-b themed-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl text-paper hover:text-amber transition-colors">
          B<span className="text-amber">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-body font-medium transition-colors py-1 ${
                  isActive ? 'text-paper' : 'text-muted hover:text-paper'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-body font-semibold border border-amber text-amber rounded-sm hover:bg-amber hover:text-ink transition-colors duration-200"
          >
            Hire me
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 flex items-center justify-center border border-muted/30 rounded-sm text-muted hover:border-amber hover:text-amber transition-colors duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.15 }}
                >
                  <SunIcon className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -30 }}
                  transition={{ duration: 0.15 }}
                >
                  <MoonIcon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-paper transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden themed-bg border-t themed-border"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-body font-medium text-muted hover:text-paper py-3 border-b border-muted/10 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 text-center px-5 py-3 text-sm font-body font-semibold border border-amber text-amber rounded-sm hover:bg-amber hover:text-ink transition-colors"
              >
                Hire me
              </a>
              <button
                onClick={toggleTheme}
                className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-body text-muted hover:text-paper transition-colors border border-muted/20 rounded-sm"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <><SunIcon className="w-4 h-4" /> Light mode</>
                ) : (
                  <><MoonIcon className="w-4 h-4" /> Dark mode</>
                )}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
