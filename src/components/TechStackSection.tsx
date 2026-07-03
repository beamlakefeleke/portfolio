import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Mobile', 'Frontend', 'Backend', 'Database', 'Tools'] as const;
type Category = typeof categories[number];

const technologies: { name: string; category: Exclude<Category, 'All'> }[] = [
  { name: 'Flutter',      category: 'Mobile' },
  { name: 'Dart',         category: 'Mobile' },
  { name: 'React',        category: 'Frontend' },
  { name: 'Next.js',      category: 'Frontend' },
  { name: 'Vue.js',       category: 'Frontend' },
  { name: 'TypeScript',   category: 'Frontend' },
  { name: 'JavaScript',   category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'HTML / CSS',   category: 'Frontend' },
  { name: 'Node.js',      category: 'Backend' },
  { name: 'NestJS',       category: 'Backend' },
  { name: 'Spring Boot',  category: 'Backend' },
  { name: 'Express',      category: 'Backend' },
  { name: 'Python',       category: 'Backend' },
  { name: 'GraphQL',      category: 'Backend' },
  { name: 'REST APIs',    category: 'Backend' },
  { name: 'MongoDB',      category: 'Database' },
  { name: 'PostgreSQL',   category: 'Database' },
  { name: 'Firebase',     category: 'Database' },
  { name: 'Supabase',     category: 'Database' },
  { name: 'SQLite',       category: 'Database' },
  { name: 'Git',          category: 'Tools' },
  { name: 'Docker',       category: 'Tools' },
  { name: 'Figma',        category: 'Tools' },
  { name: 'WebRTC',       category: 'Tools' },
];

export function TechStackSection() {
  const [active, setActive] = useState<Category>('All');

  const filtered = technologies.filter(
    (t) => active === 'All' || t.category === active
  );

  return (
    <section className="py-28 relative z-10" id="tech">
      <div className="max-w-7xl mx-auto px-6">
        <p className="reveal text-xs font-mono text-amber uppercase tracking-widest mb-4">
          Stack
        </p>
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-paper leading-tight">
            What I build with
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter technologies by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded-sm transition-colors duration-150 ${
                  active === cat
                    ? 'bg-amber text-ink'
                    : 'border border-muted/30 text-muted hover:text-paper hover:border-muted/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tag grid — no fake percentages */}
        <motion.div layout className="flex flex-wrap gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.span
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 text-sm font-body border border-muted/25 text-muted hover:border-amber hover:text-paper rounded-sm transition-colors duration-150 cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
