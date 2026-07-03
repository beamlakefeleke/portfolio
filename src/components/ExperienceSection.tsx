import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: 'Safaricom Ethiopia',
    role: 'Full-Stack Developer',
    period: 'Jun 2025 – Present',
    isCurrent: true,
    description:
      'Full-stack developer on the commercial trade platform used by Safaricom\'s field sales teams across Ethiopia. Own the Flutter mobile client, the Node.js/NestJS API layer, and the PostgreSQL schema — from architecture decisions to production releases.',
  },
  {
    id: 2,
    company: 'Afriuz',
    role: 'Full-Stack Developer',
    period: 'Aug 2025 – Jan 2026',
    isCurrent: false,
    description:
      'Built a PWA e-commerce platform: Next.js storefront, NestJS REST API, MongoDB, and a Telegram bot that pushed real-time order notifications to the ops team. Handled everything from DB schema design to deployment on a VPS behind Nginx.',
  },
  {
    id: 3,
    company: 'Kehsuid Tech',
    role: 'Flutter Developer',
    period: 'Jan 2024 – Apr 2025',
    isCurrent: false,
    description:
      'Built the Kehsuid e-commerce mobile app with Firebase backend and Provider state management. Integrated Chapa payment gateway, implemented real-time inventory tracking, and shipped to both App Store and Play Store.',
  },
  {
    id: 4,
    company: 'Kehsuid Tech',
    role: 'Flutter Developer — Real Estate',
    period: 'Sep 2023 – Dec 2023',
    isCurrent: false,
    description:
      'Developed a property listing app with GetX state management. Built complex multi-criteria filtering (location, price, property type) and embedded interactive Google Maps for property previews.',
  },
  {
    id: 5,
    company: 'Sixam Mart',
    role: 'Flutter Maintenance',
    period: 'May 2023 – Jun 2024',
    isCurrent: false,
    description:
      'Maintained a multi-vendor delivery app. Diagnosed and resolved recurring crash loop affecting 15% of Android users, traced to a race condition in the order listener. Improved crash-free rate from 84% to 97%.',
  },
];

export function ExperienceSection() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = experiences.find((e) => e.id === activeId)!;

  return (
    <section className="py-28 relative z-10" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <p className="reveal text-xs font-mono text-amber uppercase tracking-widest mb-4">
          Experience
        </p>
        <h2 className="reveal font-display text-5xl md:text-6xl text-paper leading-tight mb-16">
          Where I've worked
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border themed-border rounded-sm overflow-hidden" style={{ borderColor: 'var(--color-divider)' }}>
          {/* Company list */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r themed-border" style={{ borderColor: 'var(--color-divider)' }}>
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`w-full text-left px-6 py-5 border-b themed-border last:border-0 transition-colors duration-150 ${
                  activeId === exp.id
                    ? 'themed-surface themed-text'
                    : 'themed-muted hover:themed-surface'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-sm">{exp.company}</span>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Now
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-muted mt-1 block">{exp.role}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 themed-surface p-8 lg:p-10 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <p className="text-xs font-mono text-amber uppercase tracking-widest mb-2">
                  {active.period}
                </p>
                <h3 className="font-display text-2xl text-paper mb-2">{active.company}</h3>
                <p className="text-sm font-body text-muted mb-6">{active.role}</p>
                <p className="font-body text-sm text-muted leading-relaxed">{active.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
