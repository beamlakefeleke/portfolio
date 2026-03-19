import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  // Add intersection observer logic for section-animate class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-primary bg-grid overflow-hidden text-white font-sans">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none noise-overlay" />

      {/* Mouse-following Spotlight */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145,94,255,0.15), transparent 40%)`
        }} />
      

      {/* Floating Gradient Orbs Background */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[120px] animate-pulse-slow pointer-events-none z-0" />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-pink/15 blur-[150px] animate-pulse-slow pointer-events-none z-0"
        style={{
          animationDelay: '2s'
        }} />
      
      <div
        className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-blue-500/10 blur-[100px] animate-pulse-slow pointer-events-none z-0"
        style={{
          animationDelay: '4s'
        }} />
      

      <Navbar />

      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <div className="glow-line opacity-50" />
        <AboutSection />
        <div className="glow-line opacity-50" />
        <ExperienceSection />
        <div className="glow-line opacity-50" />
        <TechStackSection />
        <div className="glow-line opacity-50" />
        <ProjectsSection />
        <div className="glow-line opacity-50" />
        <ContactSection />
      </main>

      <Footer />
    </div>);

}