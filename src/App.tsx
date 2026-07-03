import { useEffect, createContext, useContext, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

type Theme = 'dark' | 'light';

// Theme context
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Scroll-reveal: add is-visible when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative min-h-screen themed-bg themed-text font-body overflow-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <TechStackSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
