import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Safaricom Commercial Trade App',
    type: 'Mobile · Flutter',
    problem: 'Safaricom\'s field agents were tracking commercial sales in spreadsheets, causing reconciliation errors and delayed reporting.',
    approach: 'Built a BLoC-architected Flutter app with offline-first sync — agents work without signal and data reconciles on reconnect. Integrated with the existing REST backend via secure token auth.',
    outcome: '40% faster startup after lazy-loading refactor. Rolled out to 200+ field agents.',
    tech: ['Flutter', 'BLoC', 'REST API', 'SQLite'],
    featured: true,
  },
  {
    id: 2,
    title: 'Afriuz E-commerce PWA',
    type: 'Web · Fullstack',
    problem: 'A small electronics retailer needed an online store and a way to get notified of orders without checking a dashboard.',
    approach: 'Next.js storefront + NestJS API + MongoDB. Built a Telegram bot integration so the ops team gets instant order pings with full details in their existing group chat.',
    outcome: 'Launched in 6 weeks. Order notification response time cut from hours to under 2 minutes.',
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Telegram Bot'],
    featured: true,
  },
  {
    id: 3,
    title: 'SafeCrop Disease Detection',
    type: 'Mobile · ML',
    problem: 'Ethiopian smallholder farmers had no quick way to identify crop diseases before they spread.',
    approach: 'On-device TFLite model in Flutter so it works without internet in the field. Trained on a curated dataset of 5 common crop diseases.',
    outcome: '85% classification accuracy. Runs under 300ms on mid-range Android.',
    tech: ['Flutter', 'TFLite', 'SQLite'],
    featured: false,
  },
  {
    id: 4,
    title: 'Kehsuid E-commerce App',
    type: 'Mobile · Flutter',
    problem: 'Retailer needed a customer-facing mobile store with live inventory and local payment integration.',
    approach: 'Flutter app with Provider state management, Firebase Firestore for real-time inventory, and Chapa gateway for ETB payments.',
    outcome: 'Shipped to both stores. 500+ installs in first month.',
    tech: ['Flutter', 'Firebase', 'Provider', 'Chapa'],
    featured: false,
  },
  {
    id: 5,
    title: 'Sixam Mart — Crash Fix',
    type: 'Mobile · Maintenance',
    problem: '15% of Android users hitting a recurring crash loop in the order tracking flow.',
    approach: 'Traced the crash to a race condition in the StreamSubscription for the order status listener. Fixed with proper lifecycle management and added integration tests for the affected flow.',
    outcome: 'Crash-free rate went from 84% to 97% in the release cycle.',
    tech: ['Flutter', 'Dart', 'Firebase Crashlytics'],
    featured: false,
  },
];

export function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-28 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <p className="reveal text-xs font-mono text-amber uppercase tracking-widest mb-4">
          Projects
        </p>
        <h2 className="reveal font-display text-5xl md:text-6xl text-paper leading-tight mb-4">
          Selected work
        </h2>
        <p className="reveal text-sm text-muted font-body mb-16 max-w-md">
          Each entry is a real project: problem, my specific role, and a measurable outcome.
        </p>

        <div className="space-y-0 border-t border-muted/20">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              className="border-b border-muted/20"
            >
              {/* Row header — always visible */}
              <button
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={expanded === project.id}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="text-xs font-mono text-muted/50 pt-1 w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-body font-semibold text-paper text-base md:text-lg group-hover:text-amber transition-colors">
                      {project.title}
                      {project.featured && (
                        <span className="ml-3 text-[10px] font-mono text-amber border border-amber/40 px-2 py-0.5 rounded-sm uppercase tracking-wider align-middle">
                          Featured
                        </span>
                      )}
                    </h3>
                    <p className="text-xs font-mono text-muted mt-1">{project.type}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === project.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 ml-4"
                >
                  <ArrowRightIcon className="w-4 h-4 text-muted group-hover:text-amber transition-colors" />
                </motion.div>
              </button>

              {/* Expanded case study */}
              <AnimatePresence>
                {expanded === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14 pr-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { label: 'Problem', text: project.problem },
                        { label: 'My approach', text: project.approach },
                        { label: 'Outcome', text: project.outcome },
                      ].map((section) => (
                        <div key={section.label}>
                          <p className="text-[10px] font-mono text-amber uppercase tracking-widest mb-2">
                            {section.label}
                          </p>
                          <p className="text-sm font-body text-muted leading-relaxed">
                            {section.text}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="pb-8 pl-14 pr-4 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-mono border border-muted/20 text-muted rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="flex items-center gap-1.5 text-xs font-body text-muted hover:text-paper transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" /> Code
                        </a>
                        <a
                          href="#"
                          className="flex items-center gap-1.5 text-xs font-body text-muted hover:text-paper transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLinkIcon className="w-4 h-4" /> Live
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
